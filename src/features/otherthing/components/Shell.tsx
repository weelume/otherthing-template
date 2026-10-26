'use client'

import Link from 'next/link'
import { useEffect, type ReactNode } from 'react'
import { Navigation } from './Navigation'
import { copy } from '../content/common'
import { socialLinks } from '../config/brand'
import { useOtherthingHost } from '../host'
import { pageHref } from '../routing'
import type { PageProps } from '../types'
import '../theme.css'

export function Shell({ locale, basePath, children, contact = false }: PageProps & { children: ReactNode; contact?: boolean }) {
  const host = useOtherthingHost()
  useEffect(() => {
    const root = document.documentElement
    const previous = root.dataset.otherthing
    root.dataset.otherthing = 'true'
    return () => { if (previous === undefined) delete root.dataset.otherthing; else root.dataset.otherthing = previous }
  }, [])

  return <div className="ot-site" lang={locale}>
    <Navigation locale={locale} basePath={basePath} />
    <main id="ot-main">{children}</main>
    {!contact && <section className="ot-cta"><h2>{copy.cta[locale]}</h2><Link className="ot-blue-button" href={pageHref(basePath, 'contact')}>{copy.contact[locale]}</Link></section>}
    <footer className="ot-footer">
      <svg viewBox="0 0 1100 60" aria-hidden="true"><path d="M10 22C260 16 780 65 1060 32S1010 4 920 12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
      <div className="ot-social">{socialLinks.map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}</div>
      <p>{copy.tagline[locale]}</p><p>© {new Date().getFullYear()} {host.name[locale]}</p>
      {host.filing}
    </footer>
    {host.marketplaceHref && <Link className="ot-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.logo && <img src={host.logo} alt="" width="24" height="24" />}<span>{host.name[locale]}</span></Link>}
  </div>
}
