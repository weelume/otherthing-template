# Otherthing 开发约定

先读 README.md、.tpl/README.md、.tpl/template.json、.tpl/project.json、docs/ASSETS.md 与 docs/VERIFICATION.md。页面与交互能力以实际源码和验收结果为准。

- 保持 TypeScript strict，新增或升级依赖先获得用户批准。
- 品牌放 config/，双语文案放 content/，主题统一由 theme.css 管理，跨页面组件放 components/，页面只负责组合。
- 宿主差异通过 host.tsx 注入，不把宿主品牌、联系方式或本机路径写入通用模块。
- 演示表单只在本地校验，不发送或保存输入，不记录原始姓名、邮箱或详情。
- 未实现页面明确返回 404，禁止静默兜底到其他页面；素材与动效的缺失如实记录。
- 尊重减少动态效果设置；菜单支持键盘、背景滚动锁定和焦点恢复。
- 使用本地 Linux 文件系统执行安装和构建；运行 pnpm test、pnpm typecheck、pnpm lint、pnpm build，改动交互后检查实际页面。
- 修改页面注册时同步 template.ts 与 .tpl/template.json；截图使用真实页面截图，报告必须对应当前源码摘要，不虚构验收结果。
