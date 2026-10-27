'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Shell } from '../components/Shell'
import { referenceImage } from '../content/home'
import type { PageProps } from '../types'

import { experiences, awards, clients } from '../content/about'

export default function AboutPage(props: PageProps) {
  const { locale } = props
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const labels = locale === 'zh' ? ['经历', '客户', '荣誉'] : ['Experiences', 'Clients', 'Recognition']
  return <Shell {...props}><section className="ot-section ot-inner-page ot-about"><h1>{locale === 'zh' ? '关于' : 'About'}</h1><div className="ot-about-content"><div className="ot-about-tabs" role="tablist" aria-label={locale === 'zh' ? '关于工作室' : 'About the studio'}>{labels.map((label, index) => <button key={label} role="tab" aria-selected={active === index} aria-controls="ot-about-panel" onClick={() => setActive(index)}>{label}</button>)}</div><AnimatePresence mode="wait"><motion.div key={active} id="ot-about-panel" role="tabpanel" className="ot-about-panel ot-glass" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .2 }}>
    {active === 0 && experiences.map(item => <article className="ot-experience" key={item.name}><div className="ot-experience-heading"><img src={referenceImage(item.image)} alt="" /><div><strong>{item.name}</strong><span>{item.role[locale]}</span></div><time>{item.year}</time></div><p>{item.description[locale]}</p></article>)}
    {active === 1 && <><p>{locale === 'zh' ? '与初创企业、工作室和成熟品牌合作，开展各类数字与品牌项目。' : 'Collaborated with startups, studios, and established brands on a variety of digital and brand projects.'}</p><div className="ot-clients">{clients.map(id => <img key={id} src={referenceImage(id)} alt="" loading="lazy" />)}</div></>}
    {active === 2 && <div className="ot-awards">{awards.map(([name, count]) => <div key={name}><span>{name}</span><span>×{count}</span></div>)}</div>}
  </motion.div></AnimatePresence><p className="ot-about-intro">{locale === 'zh' ? '与品牌、团队和创始人紧密合作，让想法成为现实。我们专注于创作清晰、周到且在每个触点保持一致的作品。' : 'Working closely with brands, teams, and founders to bring ideas to life. The focus is on building clear, thoughtful work that feels consistent across every touchpoint.'}</p></div></section></Shell>
}
