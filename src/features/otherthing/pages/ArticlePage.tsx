'use client'
import { Shell } from '../components/Shell'
import { DetailNavigation } from '../components/DetailNavigation'
import { articles } from '../content/articles'
import { articleBodies } from '../content/articleBodies'
import { useOtherthingHost } from '../host'
import type { PageProps } from '../types'
export default function ArticlePage({ articleSlug, ...props }: PageProps & { articleSlug: string }) {
  const article = articles.find(item => item.slug === articleSlug)
  const { locale } = props
  const host = useOtherthingHost()
  if (!article) throw new Error(`Unknown article: ${articleSlug}`)
  const brand = (text: string) => text.replaceAll('{brand}', host.name[locale])
  return <Shell {...props} minimal backPath="blogs"><section className="ot-section ot-inner-page ot-article-layout"><h1>{locale === 'zh' ? '文章' : 'Blog'} {String(article.number).padStart(2, '0')}</h1><div><article className="ot-glass ot-article"><h2>{article.title[locale]}</h2><div className="ot-article-meta"><span>{article.category[locale]}</span><time dateTime={article.date}>{new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(article.date + 'T00:00:00Z'))}</time></div><img className="ot-article-cover" src={article.image} alt="" /><p className="ot-article-excerpt">{article.excerpt[locale]}</p>{articleBodies[article.body].map(section => <section key={section.heading.en}><h3>{section.heading[locale]}</h3><p>{brand(section.text[locale])}</p>{section.quote && <blockquote>{brand(section.quote[locale])}</blockquote>}</section>)}</article><DetailNavigation {...props} kind="blogs" previous={article.previous} next={article.next} /></div></section></Shell>
}
