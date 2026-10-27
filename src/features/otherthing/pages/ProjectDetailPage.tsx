'use client'

import { useCallback, useState } from 'react'
import { Shell } from '../components/Shell'
import { DetailNavigation } from '../components/DetailNavigation'
import { ImageLightbox } from '../components/ImageLightbox'
import { allProjects, projectDescriptions } from '../content/projects'
import { services } from '../content/home'
import type { PageProps } from '../types'

export default function ProjectDetailPage({ projectSlug, ...props }: PageProps & { projectSlug: string }) {
  const { locale } = props
  const index = allProjects.findIndex(project => project.slug === projectSlug)
  const project = allProjects[index]
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])
  if (!project) throw new Error(`Unknown project: ${projectSlug}`)
  const labels = locale === 'zh' ? ['日期', '客户', '服务', '简介'] : ['Date', 'Client', 'Services', 'Description']
  return <Shell {...props} minimal backPath="projects"><section className="ot-section ot-inner-page ot-project-detail"><div className="ot-project-information"><h1>{project.title}</h1><dl className="ot-glass ot-project-meta"><div><dt>{labels[0]}</dt><dd>{project.date && <time dateTime={project.date}>{new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(project.date + 'T00:00:00Z'))}</time>}</dd></div><div><dt>{labels[1]}</dt><dd>{project.client}</dd></div><div><dt>{labels[2]}</dt><dd className="ot-service-tags">{project.services.map(service => <span key={service}>{services[service][locale]}</span>)}</dd></div><div><dt>{labels[3]}</dt><dd>{projectDescriptions[project.description][locale]}</dd></div></dl></div><div className="ot-project-images">{project.images.map((image, imageIndex) => <button className="ot-glass" key={image} onClick={() => setActive(imageIndex)} aria-label={`${locale === 'zh' ? '放大图片' : 'Enlarge image'} ${imageIndex + 1}`}><img src={image} alt={`${project.title} ${imageIndex + 1}`} loading={imageIndex ? 'lazy' : 'eager'} /></button>)}<DetailNavigation {...props} kind="projects" previous={allProjects[index - 1]?.slug} next={allProjects[index + 1]?.slug} /></div></section><ImageLightbox images={project.images} active={active} onChange={setActive} onClose={close} locale={locale} title={project.title} /></Shell>
}
