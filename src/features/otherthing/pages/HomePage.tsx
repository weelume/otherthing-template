'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Faq } from '../components/Faq'
import { ProjectCarousel } from '../components/ProjectCarousel'
import { Shell } from '../components/Shell'
import { blogs, home, referenceImage, services } from '../content/home'
import { useOtherthingHost } from '../host'
import { pageHref } from '../routing'
import type { PageProps } from '../types'

export default function HomePage(props: PageProps) {
  const { locale, basePath } = props
  const host = useOtherthingHost()
  const reduced = useReducedMotion()
  const hero = useRef<HTMLElement>(null)
  const tags = locale === 'zh' ? ['设计', '创意', '制作', '品牌', '视觉'] : ['Design', 'Creativity', 'Production', 'Branding', 'Visuals']
  return <Shell {...props}>
    <section ref={hero} className="ot-hero" aria-labelledby="ot-hero-title">
      <div className="ot-hero-content"><motion.h1 id="ot-hero-title" initial={reduced ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65 }}><span>{host.name[locale]}</span></motion.h1><p>{home.intro[locale]}</p></div>
      {/* 拖拽与入场分别持有位移，避免响应式重测约束时把入场偏移带入拖拽原点。 */}
      {tags.map((tag, index) => <motion.div drag dragConstraints={hero} dragElastic={.2} dragMomentum={!reduced} dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} whileDrag={{ scale: 1.05, cursor: 'grabbing' }} className={`ot-hero-tag-position ot-hero-tag-${index}`} key={tag}><motion.span className="ot-hero-tag" initial={reduced ? false : { opacity: 0, y: -80, rotate: index % 2 ? 15 : -15 }} animate={{ opacity: 1, y: 0, rotate: index % 2 ? 7 : -7 }} transition={{ type: 'spring', stiffness: 100, damping: 12, delay: index * .1 }}>{tag}</motion.span></motion.div>)}
      <a className="ot-hero-down" href="#ot-projects" aria-label={home.scroll[locale]}><svg viewBox="0 0 27 35" aria-hidden="true"><path d="M12 3v29M3 19c4 4 8 9 10 13 1-6 7-11 11-14" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg></a>
    </section>
    <section className="ot-home-projects" id="ot-projects"><div className="ot-section ot-section-title"><h2>{home.projects[locale]}</h2><Link href={pageHref(basePath, 'projects')}>{home.seeAll[locale]}</Link></div><ProjectCarousel {...props} /></section>
    <section className="ot-section ot-home-services" id="services"><h2>{home.services[locale]}</h2><div className="ot-services-layout"><div className="ot-service-card ot-glass">{services.map((service, i) => <div key={service.en}><span>{String(i + 1).padStart(2, '0')}</span><strong>{service[locale]}</strong></div>)}</div><div className="ot-sticky-note ot-glass"><p>{home.approach[locale]}</p></div></div></section>
    <section className="ot-section ot-home-blogs"><div className="ot-section-title"><h2>{home.blogs[locale]}</h2><Link href={pageHref(basePath, 'blogs')}>{home.seeAll[locale]}</Link></div><div className="ot-blog-list">{blogs.map(blog => <Link href={pageHref(basePath, `blogs/${blog.slug}`)} key={blog.slug}><img src={referenceImage(blog.image)} alt="" loading="lazy" /><strong>{blog.title[locale]}</strong><span>{blog.category[locale]}</span><time dateTime={blog.date}>{new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${blog.date}T00:00:00Z`))}</time></Link>)}</div></section>
    <Faq locale={locale} />
  </Shell>
}
