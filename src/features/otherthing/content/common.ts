import type { Text } from '../types'

export const navigation: { slug: string; label: Text }[] = [
  { slug: '', label: { zh: '首页', en: 'Home' } },
  { slug: 'projects', label: { zh: '项目', en: 'Projects' } },
  { slug: 'blogs', label: { zh: '博客', en: 'Blogs' } },
  { slug: 'gallery', label: { zh: '图库', en: 'Gallery' } },
  { slug: 'about', label: { zh: '关于', en: 'About' } },
  { slug: 'contact', label: { zh: '联系', en: 'Contact' } },
]

export const copy = {
  menu: { zh: '菜单', en: 'Menu' },
  close: { zh: '关闭', en: 'Close' },
  skip: { zh: '跳至正文', en: 'Skip to content' },
  switchLanguage: { zh: '切换为英文', en: 'Switch to Chinese' },
  cta: { zh: '有想法\n一起实现', en: 'Got something\nin mind?' },
  contact: { zh: '聊聊你的想法', en: 'Get in touch' },
  tagline: { zh: '让每个创意都有自己的表达', en: 'Give every idea its own expression' },
} satisfies Record<string, Text>

export const faq: { question: Text; answer: Text }[] = [
  { question: { zh: '如何开始合作？', en: 'How do we start working together?' }, answer: { zh: '告诉我们项目的基本信息，我们会一起讨论下一步。', en: 'Just reach out with your project details and we’ll take it from there.' } },
  { question: { zh: '你们提供哪些服务？', en: 'What services do you offer?' }, answer: { zh: '我们专注于品牌、网站设计和数字体验。', en: 'We focus on branding, web design, and digital experiences.' } },
  { question: { zh: '项目如何报价？', en: 'What’s your price range?' }, answer: { zh: '多数项目从数千起，具体取决于项目范围。', en: 'Most projects start from a few thousand, depending on scope.' } },
  { question: { zh: '项目通常需要多久？', en: 'How long do projects take?' }, answer: { zh: '多数项目需要 2–6 周，具体取决于工作范围。', en: 'Most projects take between 2–6 weeks, depending on the scope.' } },
  { question: { zh: '你们的工作流程是怎样的？', en: 'What’s your process like?' }, answer: { zh: '从研究开始，探索想法，再通过迭代不断打磨。', en: 'We start with research, explore ideas, and refine everything through iteration.' } },
]
