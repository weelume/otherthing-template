import type { Locale } from './types'

export function pageHref(basePath: string, slug = ''): string {
  const root = basePath.replace(/\/+$/, '')
  return `${root}/${slug.replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '') || '/'
}

// 只替换语言路径段，保留当前页面、查询参数和锚点；宿主路径不能被误认为语言。
export function localeHref(pathname: string, search: string, hash: string, locale: Locale, basePath: string): string {
  const root = basePath.replace(/\/en\/?$/, '').replace(/\/+$/, '')
  const relative = pathname.slice(root.length).replace(/^\//, '').replace(/^en(?:\/|$)/, '')
  return pageHref(`${root}${locale === 'en' ? '/en' : ''}`, relative) + search + hash
}
