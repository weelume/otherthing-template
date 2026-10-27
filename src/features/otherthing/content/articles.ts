import { blogs, referenceImage } from './home'
import { articleBodies } from './articleBodies'
import type { Text } from '../types'
export type Article = { slug: string; title: Text; image: string; category: Text; date: string; number: number; body: keyof typeof articleBodies; excerpt: Text; previous?: string; next?: string }
const audience: Text = { zh: '在网上追逐大数字很容易，但最初的 100 位订阅者带来的受众、表达与有效内容方面的学习，胜过任何一次爆红。', en: 'It’s easy to chase big numbers online, but the first 100 subscribers teach you more about your audience, your voice, and what actually works than any viral moment.' }
const writing: Text = { zh: '许多工具承诺让写作更轻松。这里分享我真正使用的工具、持续使用的原因，以及放弃过的选择。', en: 'A lot of tools promise to make writing easier. Here’s what I actually use, why I keep coming back, and what I’ve ditched along the way.' }
const burnout: Text = { zh: '倦怠真实存在。你无法永远避免它，但也不必让它阻断进展。这里分享我在失去热情时继续行动的方法。', en: 'Burnout is real. You can’t avoid it forever, but you don’t have to let it tank your progress. Here’s how I keep going when the spark’s gone.' }
const design: Text = { zh: '在网上分享收入和数据可能让人不安，但它改变了我的成长方式，也建立了与读者的信任。这里分享透明表达带来的经验。', en: 'Sharing your earnings and stats online can feel risky, but it’s been a game-changer for my growth and trust with readers. Here’s what I’ve learned from being transparent.' }
const fromHome = (index: number) => ({ ...blogs[index], image: referenceImage(blogs[index].image) })
export const articles: Article[] = [
  { ...fromHome(0), number: 6, body: 'audience', excerpt: { zh: '来自近期项目和持续创意探索的想法、过程与洞见。', en: 'Thoughts, process, and insights from recent work and ongoing creative exploration.' }, previous: 'favorite-writing-tools', next: 'creative-burnout' },
  { slug: 'first-subscribers', title: { zh: '为什么最初的订阅者最重要', en: 'Why Your First Subscribers Matter Most' }, image: '/templates/otherthing/reference/a9bb8729a64880e7.webp', category: { zh: '受众', en: 'Audience' }, date: '2025-11-19', number: 8, body: 'audience', excerpt: audience, previous: 'creative-burnout', next: 'favorite-writing-tools-copy' },
  { ...fromHome(1), number: 5, body: 'writing', excerpt: writing, previous: 'creative-burnout-copy', next: 'first-subscribers-copy' },
  { slug: 'favorite-writing-tools-copy', title: { zh: '走进创意过程', en: 'Inside the Creative Process' }, image: referenceImage('718d37ed59b4b0e2'), category: { zh: '写作', en: 'Writing' }, date: '2025-10-16', number: 9, body: 'writing', excerpt: writing, previous: 'first-subscribers', next: 'sharing-numbers-copy' },
  { slug: 'hobby-to-income', title: { zh: '我如何将爱好转化为收入', en: 'How I Turned a Hobby Into Real Income' }, image: referenceImage('31d4d2516db0efc8'), category: { zh: '商业', en: 'Business' }, date: '2025-10-01', number: 3, body: 'hobby', excerpt: { zh: '把创意爱好变成真正的生意，听起来简单，做起来并不容易。这里没有空泛理论，只有对我有效的实际步骤。', en: 'Turning a creative hobby into a real business sounds simple. It isn’t. Here’s what worked for me—no theory, just the steps that paid off.' }, previous: 'consistent-content-truth', next: 'creative-burnout-copy' },
  { ...fromHome(2), number: 4, body: 'burnout', excerpt: burnout, previous: 'hobby-to-income', next: 'favorite-writing-tools' },
  { slug: 'creative-burnout', title: { zh: '我如何走出创意倦怠', en: 'How I Get Through Creative Burnout' }, image: referenceImage('0e85764286cff887'), category: { zh: '写作', en: 'Writing' }, date: '2025-10-01', number: 7, body: 'burnout', excerpt: burnout, previous: 'first-subscribers-copy', next: 'first-subscribers' },
  { ...fromHome(3), number: 2, body: 'consistency', excerpt: { zh: '多数创作者追逐新想法和流量高峰，真正的成果来自坚持基础。这里分享我关于持续行动的经验，即使过程有些无聊。', en: 'Most creators chase new ideas and big spikes. The real wins come from sticking with the basics. Here’s what I’ve learned about showing up, even when it’s boring.' }, previous: 'sharing-numbers', next: 'hobby-to-income' },
  { ...fromHome(4), number: 1, body: 'design', excerpt: design, next: 'consistent-content-truth' },
  { ...fromHome(5), number: 10, body: 'design', excerpt: design, previous: 'favorite-writing-tools-copy' },
]
