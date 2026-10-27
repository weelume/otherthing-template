import records from './projects.json'
import type { Text } from '../types'

export const allProjects = records
export const projectDescriptions: Record<string, Text> = {
  standard: { zh: '以清晰、结构与细节为重点的数字体验，在每个触点平衡视觉方向与易用性。', en: 'A digital experience designed with a focus on clarity, structure, and detail — balancing visual direction with usability across every touchpoint.' },
  modern: { zh: '以清晰表达和精致视觉识别为重点的现代化设计。', en: 'A modern redesign focused on clarity and a refined visual identity.' },
}
