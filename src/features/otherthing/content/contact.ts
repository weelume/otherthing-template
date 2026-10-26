import type { Text } from '../types'

export const contactCopy = {
  heading: { zh: '联系', en: 'Contact' },
  worldwide: { zh: '跨越地域\n一起创造', en: 'Working\nworldwide' },
  available: { zh: '开放承接\n新的项目', en: 'Available\nfor new\nprojects' },
  title: { zh: '一起做点不一样的', en: 'Let’s build something' },
  description: { zh: '聊聊你正在做的事、需要什么帮助，以及计划何时上线。', en: 'Tell me a bit about what you’re working on, what you need, and when you’re aiming to launch.' },
  name: { zh: '姓名', en: 'Name' }, email: { zh: '邮箱', en: 'Email' }, details: { zh: '详情', en: 'Details' },
  namePlaceholder: { zh: '你的名字', en: 'Enter name' }, emailPlaceholder: { zh: '你的邮箱', en: 'Enter email' }, detailsPlaceholder: { zh: '介绍一下你的项目', en: 'Enter details' },
  submit: { zh: '提交', en: 'Submit' },
  demo: { zh: '演示表单：仅在本地校验，不发送或保存信息。', en: 'Demo form: validation happens locally. Nothing is sent or saved.' },
  success: { zh: '本地校验通过，信息尚未发送或保存。', en: 'Local validation passed. Your message has not been sent or saved.' },
  invalid: { zh: '请完整填写姓名、有效邮箱和项目详情。', en: 'Please provide your name, a valid email, and project details.' },
} satisfies Record<string, Text>
