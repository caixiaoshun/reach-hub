<p align="right"><a href="./enREADME.md">English Version</a></p>

# Reach Hub 高端科研展示平台

一站式科研项目与数据集展示平台，专为遥感等高端科研领域设计。基于 Vue 3、Vite、TypeScript 和 Tailwind CSS，支持响应式设计与自动化部署。

## 主要特性
- 🚀 现代前端技术栈：Vue 3 + Vite + TypeScript + Tailwind CSS
- 📱 响应式布局，适配多端设备
- 📊 项目与数据集卡片化展示，支持搜索与筛选
- 🪄 统一交互体验，标准化组件
- ⚙️ GitHub Actions 自动部署至 GitHub Pages

## 技术栈
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## 快速开始
```bash
# 克隆仓库
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
# 启动开发环境
pnpm dev
```
浏览器访问 [http://localhost:9002](http://localhost:9002)

### 常用脚本
| 命令                | 说明               |
|---------------------|--------------------|
| pnpm dev            | 启动开发服务       |
| pnpm build          | 构建生产包         |
| pnpm preview        | 本地预览           |
| pnpm lint           | 代码检查           |
| pnpm typecheck      | TypeScript 类型检查|

## 构建与部署
```bash
pnpm build
```
构建产物位于 `dist/`，推送到 `master` 分支自动部署到 GitHub Pages。

> 如需自定义仓库路径，请修改 `vite.config.ts` 的 `base` 字段。

## 目录结构
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
4. 推送到远端 `git push origin feature/my-feature`
5. 发起 Pull Request

## 联系方式
- 📧 邮箱：[cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## 许可证
本项目遵循 [MIT](LICENSE) 协议。
