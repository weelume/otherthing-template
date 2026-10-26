import { notFound } from 'next/navigation'
import ContactPage from '../../features/otherthing/pages/ContactPage'

// 仅注册已实现页面；未实现页面明确返回 404，不用首页或其他页面静默兜底。
export function generateStaticParams() { return [{ slug: ['contact'] }, { slug: ['en', 'contact'] }] }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const locale = slug[0] === 'en' ? 'en' : 'zh'
  const path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  if (path !== 'contact') notFound()
  return <ContactPage locale={locale} basePath={locale === 'en' ? '/en' : ''} />
}
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  return { title: `${slug[0] === 'en' ? 'Contact' : '联系'} · Otherthing` }
}
