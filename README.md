# Otherthing 模板（开发中）

尚未达到完整复刻交付状态。当前实现双语首页、联系页及公共菜单、FAQ、主题和宿主注入接口；项目、博客、图库、关于等内页和逐项动效对照仍待完成。导航已保留参考站的六个入口，未实现页面明确返回 404。

使用 Node 24.16.0、pnpm 9.15.4。依赖版本沿用已有模板工具链，未引入额外库。

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
pnpm dev
```

默认开发地址为 http://127.0.0.1:43628/contact，英文为 /en/contact；使用 PORT / HOSTNAME 配置监听地址。按 Ctrl+C 停止。表单只做浏览器本地校验，不联网、不持久化。

品牌位于 src/features/otherthing/config/brand.ts；双语文案位于 content/；公共组件位于 components/；主题集中在 theme.css；页面位于 pages/。host.tsx 提供通用宿主配置，模板不依赖具体宿主工程。

尚未配置 Git 远端和完整 .tpl 元数据，未发布共享包或声明市场可上架。不得把该工作版本当作完整模板或通过的动效验收。
