import { test } from 'node:test'
import assert from 'node:assert/strict'
import { localeHref, pageHref } from '../src/features/otherthing/routing.ts'

test('独立模板切换语言保留详情路径、查询参数与锚点', () => {
  assert.equal(localeHref('/projects/bad-bag', '?view=detail', '#description', 'en', ''), '/en/projects/bad-bag?view=detail#description')
  assert.equal(localeHref('/en/projects/bad-bag', '?view=detail', '#description', 'zh', '/en'), '/projects/bad-bag?view=detail#description')
})
test('宿主路由切换语言不会丢失宿主路径或增加重复语言段', () => {
  assert.equal(localeHref('/templates/otherthing/site/en/contact', '?from=market', '#ot-name', 'zh', '/templates/otherthing/site/en'), '/templates/otherthing/site/contact?from=market#ot-name')
  assert.equal(localeHref('/templates/otherthing/site/en/contact', '', '', 'en', '/templates/otherthing/site/en'), '/templates/otherthing/site/en/contact')
})
test('英文相似单词和正文 slug 不会被当成语言前缀删除', () => {
  assert.equal(localeHref('/enough', '', '', 'en', ''), '/en/enough')
  assert.equal(localeHref('/blogs/en', '', '', 'en', ''), '/en/blogs/en')
})
test('首页与末尾斜杠不会生成空地址或双斜杠', () => {
  assert.equal(pageHref('', ''), '/')
  assert.equal(pageHref('/en/', '/contact/'), '/en/contact')
  assert.equal(localeHref('/en', '?a=1', '#top', 'zh', '/en'), '/?a=1#top')
})
