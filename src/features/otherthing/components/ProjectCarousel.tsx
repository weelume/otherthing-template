'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { home, projects, referenceImage } from '../content/home'
import { pageHref } from '../routing'
import type { PageProps } from '../types'

export function ProjectCarousel({ locale, basePath }: PageProps) {
  const viewport = useRef<HTMLDivElement>(null)
  const group = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (paused || reducedMotion) return
    let frame = 0, last = 0
    // 使用原生滚动保留触控与键盘能力；页面不可见时不累计时间，避免恢复时跳动。
    const tick = (time: number) => {
      if (viewport.current && group.current && document.visibilityState === 'visible') {
        if (last) viewport.current.scrollLeft += Math.min(time - last, 50) * 0.025
        const cycle = group.current.offsetWidth + 12
        if (viewport.current.scrollLeft >= cycle) viewport.current.scrollLeft -= cycle
      }
      last = time
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, reducedMotion])

  const move = (direction: number) => viewport.current?.scrollBy({ left: direction * (viewport.current.clientWidth * .8), behavior: reducedMotion ? 'instant' : 'smooth' })
  return <div className="ot-project-carousel">
    <div ref={viewport} className="ot-project-viewport" tabIndex={0} aria-label={home.projects[locale]} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }} onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)}>
      {[0, 1].map(copy => <div className="ot-project-group" ref={copy === 0 ? group : undefined} aria-hidden={copy === 1} key={copy}>
        {projects.map(project => <Link className="ot-project-card ot-glass" href={pageHref(basePath, `projects/${project.slug}`)} tabIndex={copy === 1 ? -1 : undefined} key={project.slug}>
          <div><strong>{project.title}</strong><span>{home.openProject[locale]}</span></div><img src={referenceImage(project.image)} alt={copy === 1 ? '' : project.alt[locale]} loading="lazy" />
        </Link>)}
      </div>)}
    </div>
    <div className="ot-carousel-controls"><button type="button" onClick={() => move(-1)}>{home.previous[locale]}</button><button type="button" onClick={() => move(1)}>{home.next[locale]}</button></div>
  </div>
}
