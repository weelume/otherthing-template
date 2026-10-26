import type { ReactNode } from 'react'

export type Locale = 'zh' | 'en'
export type Text = Record<Locale, string>
export interface PageProps { locale: Locale; basePath: string }
export interface HostConfig {
  name: Text
  logo?: string
  marketplaceHref?: string
  marketplaceLabel?: Text
  marketplaceAriaLabel?: Text
  filing?: ReactNode
}
