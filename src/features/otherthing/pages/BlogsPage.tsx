'use client'

import Link from 'next/link'
import { Shell } from '../components/Shell'
import { articles as all } from '../content/articles'
import { pageHref } from '../routing'
import type { PageProps } from '../types'

export default function BlogsPage(props: PageProps) {
  const { locale, basePath } = props
  return <Shell {...props}><section className="ot-section ot-inner-page"><h1>{locale === 'zh' ? '博客' : 'Blogs'}</h1><div className="ot-blog-list ot-all-blogs">{all.map(blog => <Link key={blog.slug} href={pageHref(basePath, `blogs/${blog.slug}`)}><img src={blog.image} alt="" loading="lazy" /><strong>{blog.title[locale]}</strong>{blog.category && <span>{blog.category[locale]}</span>}{blog.date && <time dateTime={blog.date}>{blog.date}</time>}</Link>)}</div></section></Shell>
}
