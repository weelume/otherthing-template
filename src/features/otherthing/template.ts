import { createElement } from 'react'
import { allProjects } from './content/projects'
import { articles } from './content/articles'
import type { PageProps } from './types'
type Screenshot = { src: string; alt: string; device: 'desktop' | 'tablet' | 'mobile'; width: number; height: number }

const screenshots: [Screenshot, ...Screenshot[]] = [
  {
    "src": "/templates/otherthing/screenshots/desktop-home.webp",
    "alt": "首页 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-projects.webp",
    "alt": "项目筛选 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-blogs.webp",
    "alt": "博客 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-about.webp",
    "alt": "关于 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-gallery.webp",
    "alt": "图库 · desktop",
    "device": "desktop",
    "width": 1440,
    "height": 1000
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-contact.webp",
    "alt": "联系 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-project.webp",
    "alt": "项目详情 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/desktop-article.webp",
    "alt": "文章详情 · desktop",
    "device": "desktop",
    "width": 1430,
    "height": 993
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-home.webp",
    "alt": "首页 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-projects.webp",
    "alt": "项目筛选 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-blogs.webp",
    "alt": "博客 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-about.webp",
    "alt": "关于 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-gallery.webp",
    "alt": "图库 · tablet",
    "device": "tablet",
    "width": 834,
    "height": 1180
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-contact.webp",
    "alt": "联系 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-project.webp",
    "alt": "项目详情 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/tablet-article.webp",
    "alt": "文章详情 · tablet",
    "device": "tablet",
    "width": 824,
    "height": 1166
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-home.webp",
    "alt": "首页 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-projects.webp",
    "alt": "项目筛选 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-blogs.webp",
    "alt": "博客 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-about.webp",
    "alt": "关于 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-gallery.webp",
    "alt": "图库 · mobile",
    "device": "mobile",
    "width": 390,
    "height": 844
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-contact.webp",
    "alt": "联系 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-project.webp",
    "alt": "项目详情 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  },
  {
    "src": "/templates/otherthing/screenshots/mobile-article.webp",
    "alt": "文章详情 · mobile",
    "device": "mobile",
    "width": 380,
    "height": 822
  }
]

export const otherthingTemplate = {
  id: 'otherthing', name: '别样创意 · 创意工作室', localizedNames: { en: 'Otherthing · Creative Studio' },
  sceneId: 'landing-page', listed: false, tags: ['创意工作室', '作品集', '品牌设计', '双语'],
  summary: '手绘网格风格的双语创意工作室，包含项目筛选、作品详情、博客、文章、可拖拽图库、关于与联系页。',
  accentColor: '#258df7', cover: screenshots[0].src, screenshots,
  surfaces: [{ id: 'site', name: '官网', platform: 'pc' as const, locales: ['zh', 'en'] as const, pages: [
    { slug: '', title: '首页', localizedTitles: { en: 'Home' }, load: () => import('./pages/HomePage') },
    { slug: 'contact', title: '联系', localizedTitles: { en: 'Contact' }, load: () => import('./pages/ContactPage') },
    { slug: 'blogs', title: '博客', localizedTitles: { en: 'Blogs' }, load: () => import('./pages/BlogsPage') },
    { slug: 'about', title: '关于', localizedTitles: { en: 'About' }, load: () => import('./pages/AboutPage') },
    { slug: 'projects', title: '项目', localizedTitles: { en: 'Projects' }, load: () => import('./pages/ProjectsPage') },
    { slug: 'gallery', title: '图库', localizedTitles: { en: 'Gallery' }, load: () => import('./pages/GalleryPage') },
    ...allProjects.map(project => ({ slug: `projects/${project.slug}`, title: project.title, localizedTitles: { en: project.title }, load: async () => { const { default: Page } = await import('./pages/ProjectDetailPage'); return { default: (props: PageProps) => createElement(Page, { ...props, projectSlug: project.slug }) } } })),
    ...articles.map(article => ({ slug: `blogs/${article.slug}`, title: article.title.zh, localizedTitles: { en: article.title.en }, load: async () => { const { default: Page } = await import('./pages/ArticlePage'); return { default: (props: PageProps) => createElement(Page, { ...props, articleSlug: article.slug }) } } })),
  ] }],
}
