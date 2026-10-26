'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { copy, navigation } from '../content/common'
import { socialLinks } from '../config/brand'
import { localeHref, pageHref } from '../routing'
import type { PageProps } from '../types'

export function Navigation({ locale, basePath }: PageProps) {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const triggerElement = trigger.current
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector<HTMLButtonElement>('button')?.focus()
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false) }
      if (event.key !== 'Tab') return
      const items = Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href],button') ?? [])
      const first = items[0], last = items.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = oldOverflow
      document.removeEventListener('keydown', handleKey)
      triggerElement?.focus()
    }
  }, [open])

  return <>
    <a className="ot-skip" href="#ot-main">{copy.skip[locale]}</a>
    <header className="ot-nav">
      <button ref={trigger} type="button" aria-expanded={open} aria-controls="ot-menu" onClick={() => setOpen(value => !value)}>{(open ? copy.close : copy.menu)[locale]}</button>
      <Link href={localeHref(pathname, '', '', locale === 'zh' ? 'en' : 'zh', basePath)} aria-label={copy.switchLanguage[locale]} onClick={event => { event.preventDefault(); router.push(localeHref(window.location.pathname, window.location.search, window.location.hash, locale === 'zh' ? 'en' : 'zh', basePath)) }}>{locale === 'zh' ? 'EN' : '中文'}</Link>
    </header>
    <AnimatePresence>
      {open && <motion.nav id="ot-menu" ref={panel} role="dialog" aria-modal="true" aria-label={copy.menu[locale]} className="ot-menu" initial={{ clipPath: reduced ? 'inset(0)' : 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: reduced ? 'inset(0)' : 'inset(0 0 100% 0)' }} transition={{ duration: reduced ? 0 : .45, ease: [.76, 0, .24, 1] }}>
        <button className="ot-menu-close" type="button" onClick={() => setOpen(false)}>{copy.close[locale]}</button>
        <div className="ot-menu-links">{navigation.map(item => <Link key={item.slug} href={pageHref(basePath, item.slug)} onClick={() => setOpen(false)} aria-current={pathname === pageHref(basePath, item.slug) ? 'page' : undefined}>{item.label[locale]}</Link>)}</div>
        <div className="ot-social">{socialLinks.map(link => <a key={link.label} href={link.href} rel="noreferrer" target="_blank">{link.label}</a>)}</div>
      </motion.nav>}
    </AnimatePresence>
  </>
}
