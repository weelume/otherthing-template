import { notFound } from 'next/navigation'
import { otherthingTemplate } from '../../features/otherthing/template'

// 仅注册已实现页面；未实现页面明确返回 404，不用首页或其他页面静默兜底。
export function generateStaticParams() { return otherthingTemplate.surfaces[0].pages.flatMap(page => [{ slug: page.slug ? page.slug.split('/') : [] }, { slug: ['en', ...page.slug.split('/').filter(Boolean)] }]) }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const locale = slug[0] === 'en' ? 'en' : 'zh'
  const path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const props = { locale, basePath: locale === 'en' ? '/en' : '' } as const
  const page = otherthingTemplate.surfaces[0].pages.find(page => page.slug === path)
  if (!page) notFound()
  const { default: Content } = await page.load()
  return <Content {...props} />
}
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const english = slug[0] === 'en'
  const path = (english ? slug.slice(1) : slug).join('/')
  const page = otherthingTemplate.surfaces[0].pages.find(page => page.slug === path)
  return { title: `${page ? (english ? page.localizedTitles.en : page.title) : '404'} · Otherthing` }
}
