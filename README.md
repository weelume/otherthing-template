# Otherthing 创意工作室模板

包含首页、项目列表及六类筛选、11 个项目详情、博客列表和 10 篇文章、可拖拽的循环图库、关于页三面板及联系页。27 个页面均提供中英文，共 54 个路由。页面使用本地图片和字体，公共菜单、FAQ、轮播、标签拖拽、图片查看器和图库支持减少动态效果与键盘操作。

使用 Node 24.16.0、pnpm 9.15.4。依赖版本沿用已有模板工具链，未引入额外库。

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
pnpm dev
```

默认开发地址为 http://127.0.0.1:43628/，英文为 /en；使用 PORT / HOSTNAME 配置监听地址。按 Ctrl+C 停止。表单只做浏览器本地校验，不联网、不持久化。

品牌位于 src/features/otherthing/config/brand.ts；双语文案位于 content/；公共组件位于 components/；主题集中在 theme.css；页面位于 pages/。host.tsx 提供通用宿主配置，模板不依赖具体宿主工程。

源码仓库：https://github.com/weelume/otherthing-template 。`.tpl` 包含页面、使用规则、运行合同和真实预览截图；`pnpm bundle` 生成可供宿主固定引用的组件包。检查结果与已知差异见 docs/VERIFICATION.md；字体和字号遵循本模板主题规范，区别于参考站的超大手写标题。原站素材的再分发许可尚未核实，当前不声明可公开商业再分发或市场上架。
