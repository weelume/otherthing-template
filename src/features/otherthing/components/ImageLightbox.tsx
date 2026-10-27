'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '../types'

export function ImageLightbox({ images, active, onChange, onClose, locale, title }: { images: string[]; active: number | null; onChange: (index: number) => void; onClose: () => void; locale: Locale; title: string }) {
  const close = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (active === null) return
    const focused = document.activeElement as HTMLElement | null
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    close.current?.focus()
    function key(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((active! + 1) % images.length)
      if (event.key === 'ArrowLeft') onChange((active! - 1 + images.length) % images.length)
      if (event.key === 'Tab') { event.preventDefault(); close.current?.focus() }
    }
    document.addEventListener('keydown', key)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', key); focused?.focus() }
  }, [active, images.length, onClose, onChange])
  return <AnimatePresence>{active !== null && <motion.div className="ot-lightbox" role="dialog" aria-modal="true" aria-label={title} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><button ref={close} className="ot-lightbox-close" aria-label={locale === 'zh' ? '关闭图片' : 'Close image'} onClick={onClose}>×</button><button aria-label={locale === 'zh' ? '上一张图片' : 'Previous image'} onClick={event => { event.stopPropagation(); onChange((active - 1 + images.length) % images.length) }}>←</button><img key={active} src={images[active]} alt={`${title} ${active + 1}`} onClick={event => event.stopPropagation()} /><button aria-label={locale === 'zh' ? '下一张图片' : 'Next image'} onClick={event => { event.stopPropagation(); onChange((active + 1) % images.length) }}>→</button><span className="ot-lightbox-count">{active + 1} / {images.length}</span></motion.div>}</AnimatePresence>
}
