type Screenshot = { src: string; alt: string; device: 'desktop' | 'tablet' | 'mobile'; width: number; height: number }

const screenshots: [Screenshot, ...Screenshot[]] = [
  { src: '/templates/otherthing/screenshots/desktop-home.webp', alt: '创意工作室首页 · 桌面', device: 'desktop', width: 1430, height: 993 },
  { src: '/templates/otherthing/screenshots/desktop-contact.webp', alt: '联系页面 · 桌面', device: 'desktop', width: 1430, height: 993 },
  { src: '/templates/otherthing/screenshots/tablet-home.webp', alt: '创意工作室首页 · 平板', device: 'tablet', width: 824, height: 1166 },
  { src: '/templates/otherthing/screenshots/tablet-contact.webp', alt: '联系页面 · 平板', device: 'tablet', width: 824, height: 1166 },
  { src: '/templates/otherthing/screenshots/mobile-home.webp', alt: '创意工作室首页 · 手机', device: 'mobile', width: 380, height: 822 },
  { src: '/templates/otherthing/screenshots/mobile-contact.webp', alt: '联系页面 · 手机', device: 'mobile', width: 380, height: 822 },
]

export const otherthingTemplate = {
  id: 'otherthing', name: '别样创意 · 创意工作室', localizedNames: { en: 'Otherthing · Creative Studio' },
  sceneId: 'landing-page', listed: false, tags: ['创意工作室', '作品集', '品牌设计', '双语'],
  summary: '手绘网格风格的创意工作室模板；首页和联系页可预览，项目、博客及其他内页待完善。',
  accentColor: '#258df7', cover: screenshots[0].src, screenshots,
  surfaces: [{ id: 'site', name: '官网', platform: 'pc' as const, locales: ['zh', 'en'] as const, pages: [
    { slug: '', title: '首页', localizedTitles: { en: 'Home' }, load: () => import('./pages/HomePage') },
    { slug: 'contact', title: '联系', localizedTitles: { en: 'Contact' }, load: () => import('./pages/ContactPage') },
  ] }],
}
