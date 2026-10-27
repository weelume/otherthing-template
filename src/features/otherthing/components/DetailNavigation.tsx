import Link from 'next/link'
import type { PageProps } from '../types'
import { pageHref } from '../routing'

export function DetailNavigation({ locale, basePath, kind, previous, next }: PageProps & { kind: 'projects' | 'blogs'; previous?: string; next?: string }) {
  return <nav className="ot-detail-navigation" aria-label={locale === 'zh' ? '相邻内容' : 'Adjacent entries'}>{previous ? <Link href={pageHref(basePath, `${kind}/${previous}`)}>← {locale === 'zh' ? '上一篇' : 'Prev'}</Link> : <span />}{next && <Link href={pageHref(basePath, `${kind}/${next}`)}>{locale === 'zh' ? '下一篇' : 'Next'} →</Link>}</nav>
}
