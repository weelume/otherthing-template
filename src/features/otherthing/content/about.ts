import type { Text } from '../types'

export const experiences: { name: string; role: Text; year: string; image: string; description: Text }[] = [
  { name: 'Otherthing Studio', role: { zh: '创始人', en: 'Founder' }, year: '2026', image: '7a3acb372bcb6bd2', description: { zh: '独立工作室，专注于品牌、数字和视觉系统。从概念到落地，通过结构、迭代和对细节的关注，打造清晰而统一的体验。', en: 'An independent studio focused on branding, digital, and visual systems. Leading projects from concept to execution, building clear and cohesive experiences through structure, iteration, and attention to detail.' } },
  { name: 'Northbound Studio', role: { zh: '首席设计师', en: 'Lead Designer' }, year: '2025', image: 'dd209eba56a4c95f', description: { zh: '为不同行业主导品牌与数字项目，涵盖视觉识别、网站和活动，确保每个触点都保持一致与清晰。', en: 'Leading brand and digital projects across different industries. Working on identity systems, websites, and campaigns, ensuring consistency and clarity across every touchpoint.' } },
  { name: 'Luma Labs', role: { zh: '产品设计师', en: 'Product Designer' }, year: '2024', image: '57ffbfa77b410638', description: { zh: '设计数字产品和交互体验，改进平台、优化用户流程，并建立可扩展的设计系统。', en: 'Designing digital products and interactive experiences. Contributing to platform improvements, refining user flows, and building scalable design systems across multiple features.' } },
]
export const awards = [['Innovative Design Award', 5], ['UX Excellence', 6], ['Green Design Award', 3], ['Top Digital Agency', 2], ['Creative Visionary', 1], ['Emerging Talent', 1], ['Interactive Media Award', 5], ['Design Leadership', 2], ['Awwwards', 3], ['Graphic Design Award', 5]] as const
export const clients = ['158658ce5822ab78', 'dae9ce4ebc5033e9', 'e23bcc070b67388e', '11a6ce810fcd4ce3', '156eb8bf98d10acf', '6eae23f1f21ab416', 'b6a8e3affdd8f0d8', '4e5a3a2f97678536', '48de8535aca2f1fc', '5db2ee5c4c48c25c']

