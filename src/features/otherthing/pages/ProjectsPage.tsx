'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Shell } from '../components/Shell'
import { projects, referenceImage, services } from '../content/home'
import { allProjects } from '../content/projects'
import { pageHref } from '../routing'
import type { PageProps } from '../types'

const items = [
  ...projects.map(project => ({ ...project, src: referenceImage(project.image) })),
  { title: 'L Cuaderno', slug: 'crave-copy-2', src: referenceImage('d239be33808860a6') },
  { title: 'Destroy', slug: 'crave-copy', src: referenceImage('68552ad05a54a69b') },
  { title: 'Cowboy(g)', slug: 'cool-animals', src: '/templates/otherthing/reference/967470c659a7a6fa.webp' },
  { title: 'Flowers', slug: 'flower', src: '/templates/otherthing/reference/e6d386aa2bb5236f.webp' },
  { title: '3 Jeans', slug: 'dv', src: '/templates/otherthing/reference/446896ec19d762d0.webp' },
]
// 分类关系来自原站逐项筛选结果，顺序与服务列表一致。

export default function ProjectsPage(props: PageProps) {
  const { locale, basePath } = props
  const [filter, setFilter] = useState(-1)
  const reduced = useReducedMotion()
  const visible = filter < 0 ? items : items.filter(item => allProjects.some(project => project.slug === item.slug && project.services.includes(filter)))
  return <Shell {...props}><section className="ot-section ot-inner-page"><h1>{locale === 'zh' ? '项目' : 'Projects'}</h1><div className="ot-project-filters" aria-label={locale === 'zh' ? '筛选项目' : 'Filter projects'}>{[{ zh: '全部', en: 'All' }, ...services].map((label, i) => <button key={label.en} type="button" aria-pressed={filter === i - 1} onClick={() => setFilter(i - 1)}>{label[locale]}</button>)}</div><motion.div layout={!reduced} className="ot-project-grid"><AnimatePresence>{visible.map(item => <motion.div layout={!reduced} key={item.slug} initial={reduced ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .25 }}><Link className="ot-project-card ot-glass" href={pageHref(basePath, `projects/${item.slug}`)}><div><strong>{item.title}</strong><span>{locale === 'zh' ? '查看项目' : 'Open Project'}</span></div><img src={item.src} alt="" loading="lazy" /></Link></motion.div>)}</AnimatePresence></motion.div></section></Shell>
}
