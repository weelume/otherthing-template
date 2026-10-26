import type { Text } from '../types'

export const home = {
  intro: { zh: '专注数字体验、品牌与视觉表达的创意工作室', en: 'A creative studio focused on digital experiences, branding, and visual work.' },
  projects: { zh: '精选项目', en: 'Selected Projects' },
  services: { zh: '服务', en: 'Services' },
  blogs: { zh: '博客', en: 'Blogs' },
  seeAll: { zh: '查看全部', en: 'See all' },
  openProject: { zh: '查看项目', en: 'Open project' },
  previous: { zh: '上一组项目', en: 'Previous projects' },
  next: { zh: '下一组项目', en: 'Next projects' },
  scroll: { zh: '向下浏览项目', en: 'Scroll to projects' },
  approach: { zh: '每个项目都不一样，目标始终如一：让作品清晰、有想法、经得起推敲。', en: 'Every project is different, but the goal is always the same — make things feel clear, intentional, and well crafted.' },
} satisfies Record<string, Text>

export const services: Text[] = [
  { zh: '品牌策略', en: 'Brand Strategy' }, { zh: '创意活动', en: 'Campaigns' },
  { zh: '创意指导', en: 'Creative Direction' }, { zh: '制作', en: 'Production' },
  { zh: '产品设计', en: 'Product Design' }, { zh: '视觉与摄影', en: 'Visuals & Photography' },
]

export const projects = [
  { title: 'Bad Bag', slug: 'bad-bag', image: '67f93b134f146c9f', alt: { zh: 'Bad Bag 项目拼贴', en: 'Bad Bag project collage' } },
  { title: 'Juntada', slug: 'dv-copy', image: '8035f9b2535f0c7c', alt: { zh: 'Juntada 项目摄影', en: 'Juntada project photograph' } },
  { title: 'Almost Human', slug: 'almost-human', image: 'fc81072cf3632769', alt: { zh: 'Almost Human 项目摄影', en: 'Almost Human project photograph' } },
  { title: 'Happy B:)', slug: 'cool-animals-copy-copy', image: '2a39ab0cc9fd77bc', alt: { zh: 'Happy B:) 项目拼贴', en: 'Happy B:) project collage' } },
  { title: 'Grounded', slug: 'cool-animals-copy', image: '80944df5c7076e1f', alt: { zh: 'Grounded 项目视觉', en: 'Grounded project artwork' } },
]

export const blogs: { title: Text; slug: string; image: string; category: Text; date: string }[] = [
  { title: { zh: '建立更好的创意系统', en: 'Building Better Creative Systems' }, slug: 'first-subscribers-copy', image: '1c2fe37060429098', category: { zh: '受众', en: 'Audience' }, date: '2025-11-19' },
  { title: { zh: '我真正使用的写作工具', en: 'The Only Writing Tools I Actually Use' }, slug: 'favorite-writing-tools', image: 'eb65f5a64e646453', category: { zh: '写作', en: 'Writing' }, date: '2025-10-16' },
  { title: { zh: '探索视觉创作', en: 'Exploring visual work.' }, slug: 'creative-burnout-copy', image: '7f56d245d86f1a08', category: { zh: '写作', en: 'Writing' }, date: '2025-10-01' },
  { title: { zh: '持续创作的真相', en: 'The Truth About Consistent Content' }, slug: 'consistent-content-truth', image: 'f9f127ac85838a9a', category: { zh: '心态', en: 'Mindset' }, date: '2025-07-09' },
  { title: { zh: '公开分享我的收入', en: 'Sharing My Earnings Online' }, slug: 'sharing-numbers', image: '863ca49dc1c13fc8', category: { zh: '商业', en: 'Business' }, date: '2025-05-22' },
  { title: { zh: '数字创意方向笔记', en: 'Notes on Digital Direction' }, slug: 'sharing-numbers-copy', image: '9d9fb846e1e7e704', category: { zh: '商业', en: 'Business' }, date: '2025-05-22' },
]

export const referenceImage = (id: string) => `/templates/otherthing/reference/${id}.avif`
