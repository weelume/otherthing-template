'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { faq } from '../content/common'
import type { Locale } from '../types'

export function Faq({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<number | null>(null)
  const reduced = useReducedMotion()
  return <section className="ot-section ot-faq"><h2>{locale === 'zh' ? '快速解答' : 'Quick answers'}<span aria-hidden="true">?</span></h2><div>{faq.map((item, index) => <article key={item.question.en}>
    <h3><button id={`ot-faq-${index}`} aria-expanded={active === index} aria-controls={`ot-answer-${index}`} onClick={() => setActive(active === index ? null : index)}>{item.question[locale]}<span aria-hidden="true">{active === index ? '−' : '+'}</span></button></h3>
    <AnimatePresence initial={false}>{active === index && <motion.div id={`ot-answer-${index}`} role="region" aria-labelledby={`ot-faq-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .28 }}><p>{item.answer[locale]}</p></motion.div>}</AnimatePresence>
  </article>)}</div></section>
}
