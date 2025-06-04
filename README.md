# Reach Hub 高端科研展示平台

[English](README.en.md) | 简体中文

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Reach Hub 是一套基于 Vue 3 与 Vite 的现代科研成果与数据集展示平台，致力于提供优雅流畅的用户体验，特别适用于遥感及相关领域。

## 功能亮点
- ⚡ **现代化技术栈**：Vue 3 + Vite + TypeScript + Tailwind CSS 构建高性能前端。
- 🌐 **多语言支持**：内置中文、英文及藏语界面，轻松切换。
- 📱 **响应式布局**：在手机、平板和桌面端均保持一致体验。
- 📊 **项目与数据集管理**：卡片式界面，配备搜索与筛选，便于快速定位所需内容。
- 🔍 **即时搜索与加载动画**：提供骨架屏加载效果与模糊搜索，提升交互流畅度。
- 🚀 **自动化部署**：推送代码即可触发 CI/CD 流程，自动部署至 GitHub Pages。

## 技术栈
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## 快速开始
```bash
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
```

### 常用脚本
| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务 |
| `pnpm build` | 构建生产包 |
| `pnpm preview` | 本地预览 |
| `pnpm lint` | 代码检查 |
| `pnpm typecheck` | 类型检查 |

## 本地开发
```bash
pnpm dev
```
在浏览器打开 [http://localhost:9002](http://localhost:9002) 查看效果。

## 构建与部署
```bash
pnpm build
```
构建结果位于 `dist/` 目录，推送到 `master` 分支后将自动部署到 GitHub Pages。

### `vite.config.ts` 示例
```ts
export default defineConfig({
  base: '/reach-hub/' // 若仓库名不同，请相应修改
});
```

## 项目结构
```text
reach-hub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── data/
│   ├── http/
│   ├── router/
│   ├── types/
│   ├── utils/
│   ├── views/
│   └── main.ts
├── index.html
└── vite.config.ts
```

## 贡献指南
1. Fork 本仓库
2. 新建分支 `git checkout -b feature/my-feature`
3. 提交修改 `git commit -m 'feat: add feature'`
4. 推送到远程 `git push origin feature/my-feature`
5. 发起 Pull Request

## 联系方式
- 📧 邮箱：[cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## 致谢
- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Lucide Icons

## 许可证
本项目遵循 [MIT](LICENSE) 许可证。

如需英文文档，请查看 [README.en.md](README.en.md)。
