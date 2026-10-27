'use client'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { Shell } from '../components/Shell'
import { galleryItems } from '../content/gallery'
import type { PageProps } from '../types'
const wrap = (value: number, size: number) => ((value % size) + size) % size

export default function GalleryPage(props: PageProps) {
  const viewport = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 1000, height: 1000, scale: 1, ready: false })
  const pointer = useRef<{ id: number; x: number; y: number; time: number } | null>(null)
  const velocity = useRef({ x: 0, y: 0 })
  const reduced = useReducedMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const loopX = useTransform(x, value => wrap(value, size.width) - size.width)
  const loopY = useTransform(y, value => wrap(value, size.height) - size.height)
  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width: Math.max(width * 1.5, 760), height: Math.max(height * 1.25, 980), scale: width < 810 ? .67 : 1, ready: true })
    })
    resize.observe(element)
    const wheel = (event: WheelEvent) => { event.preventDefault(); velocity.current = { x: 0, y: 0 }; x.set(x.get() - event.deltaX); y.set(y.get() - event.deltaY) }
    element.addEventListener('wheel', wheel, { passive: false })
    return () => { resize.disconnect(); element.removeEventListener('wheel', wheel); document.body.style.overflow = previous }
  }, [x, y])
  useAnimationFrame((_time, delta) => {
    if (pointer.current || reduced) return
    const dt = Math.min(delta, 32)
    const factor = Math.exp(-dt / 180)
    velocity.current.x *= factor; velocity.current.y *= factor
    if (Math.abs(velocity.current.x) + Math.abs(velocity.current.y) < .01) return
    x.set(x.get() + velocity.current.x * dt); y.set(y.get() + velocity.current.y * dt)
  })
  function down(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY, time: event.timeStamp }
    velocity.current = { x: 0, y: 0 }
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const previous = pointer.current
    if (!previous || previous.id !== event.pointerId) return
    const dx = event.clientX - previous.x, dy = event.clientY - previous.y
    const dt = Math.max(1, event.timeStamp - previous.time)
    x.set(x.get() + dx); y.set(y.get() + dy)
    velocity.current = { x: dx / dt, y: dy / dt }
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY, time: event.timeStamp }
  }
  return <Shell {...props} minimal><div className="ot-gallery" data-ready={size.ready} ref={viewport} tabIndex={0} role="region" aria-label={props.locale === 'zh' ? '作品图库' : 'Work gallery'} aria-describedby="ot-gallery-instructions" onPointerDown={down} onPointerMove={move} onPointerUp={() => { pointer.current = null }} onPointerCancel={() => { pointer.current = null; velocity.current = { x: 0, y: 0 } }} onKeyDown={event => {
    const directions: Record<string, [number, number]> = { ArrowLeft: [100, 0], ArrowRight: [-100, 0], ArrowUp: [0, 100], ArrowDown: [0, -100], Home: [-x.get(), -y.get()] }
    if (directions[event.key]) { event.preventDefault(); const [dx, dy] = directions[event.key]; x.set(x.get() + dx); y.set(y.get() + dy); velocity.current = { x: 0, y: 0 } }
  }}><p id="ot-gallery-instructions" className="ot-sr-only">{props.locale === 'zh' ? '拖动或滚动浏览，使用方向键移动，Home 键回到起点。' : 'Drag or scroll to explore. Use arrow keys to pan and Home to reset.'}</p><motion.div className="ot-gallery-world" style={{ x: loopX, y: loopY }}>{[0, 1, 2].flatMap(row => [0, 1, 2].map(column => <div key={`${row}-${column}`} aria-hidden={row !== 1 || column !== 1} className="ot-gallery-tile" style={{ width: size.width, height: size.height, left: column * size.width, top: row * size.height }}>{galleryItems.map(item => <motion.figure key={item.image} className="ot-gallery-item" style={{ left: item.x * size.width, top: item.y * size.height, width: item.width * size.scale }} whileHover={reduced ? undefined : { scale: 1.06 }} transition={{ type: 'spring', stiffness: 350, damping: 24 }}><img src={item.image} alt={item.title[props.locale]} draggable={false} /><figcaption>{item.title[props.locale]}</figcaption></motion.figure>)}</div>))}</motion.div></div></Shell>
}
