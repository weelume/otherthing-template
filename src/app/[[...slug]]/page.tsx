import { notFound } from 'next/navigation'
import ContactPage from '../../features/otherthing/pages/ContactPage'
import HomePage from '../../features/otherthing/pages/HomePage'

// 仅注册已实现页面；未实现页面明确返回 404，不用首页或其他页面静默兜底。
export function generateStaticParams() { return [{ slug: [] }, { slug: ['en'] }, { slug: ['contact'] }, { slug: ['en', 'contact'] }] }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const locale = slug[0] === 'en' ? 'en' : 'zh'
  const path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const props = { locale, basePath: locale === 'en' ? '/en' : '' } as const
  if (!path) return <HomePage {...props} />
  if (path === 'contact') return <ContactPage {...props} />
  notFound()
}
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const english = slug[0] === 'en'
  const isContact = slug.at(-1) === 'contact'
  return { title: `${isContact ? (english ? 'Contact' : '联系') : (english ? 'Creative Studio' : '创意工作室')} · Otherthing` }
}
