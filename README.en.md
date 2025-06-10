
# Reach Hub 高端科研展示平台

一站式科研项目与数据集展示平台，专为遥感等高端科研领域设计。基于 Vue 3、Vite、TypeScript 和 Tailwind CSS，支持响应式设计与自动化部署。

## 项目简介
Reach Hub 是一个面向遥感等高端科研领域的一站式科研项目与数据集展示平台，旨在为科研团队、学者和开发者提供高效、标准化的项目与数据集管理与展示解决方案。平台基于 Vue 3、Vite、TypeScript 和 Tailwind CSS 构建，支持响应式设计与自动化部署，助力科研成果的传播与协作。

## 背景与目标
- 解决科研项目分散、数据集难以统一管理与展示的问题。
- 降低团队成员协作与成果推广的门槛。
- 提供美观、现代、易用的前端展示界面。

## 主要特性
- 🚀 **现代前端技术栈**：Vue 3 + Vite + TypeScript + Tailwind CSS，构建高性能前端。
- 📱 **响应式设计**：适配手机、平板、桌面等多端设备。
- 📊 **项目与数据集卡片化展示**：支持多标签、简介、作者、年份、领域等信息展示。
- 🔍 **智能搜索与筛选**：支持按关键词、标签、作者等多条件检索。
- 🪄 **统一交互体验**：标准化组件、导航、提示与主题切换。
- 🖼️ **丰富的可视化与演示**：支持项目/数据集图片、交互式 Demo 嵌入。
- ⚙️ **自动化部署**：GitHub Actions 自动构建并部署至 GitHub Pages。
- 🌐 **多语言支持**：支持中英文切换，便于国际交流。

## 技术栈
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## 依赖环境
- Node.js >= 18.x
- pnpm >= 8.x
- 推荐使用最新版 Chrome/Edge 浏览器

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

## 配置说明
- 默认开发端口：`9002`，可在 `vite.config.ts` 修改。
- 构建产物目录：`dist/`
- 部署路径：如需自定义仓库路径，请修改 `vite.config.ts` 的 `base` 字段。
- 环境变量：可在 `.env` 文件中自定义 API 地址等参数。

## 目录结构
```text
reach-hub/
├── public/
├── src/
│   ├── assets/         # 静态资源与图片
│   ├── components/     # 组件库
│   ├── composables/    # 组合式函数
│   ├── data/           # 项目与数据集元数据
│   ├── http/           # 网络请求封装
│   ├── router/         # 路由配置
│   ├── types/          # TypeScript 类型定义
│   ├── utils/          # 工具函数
│   ├── views/          # 页面视图
│   └── main.ts         # 入口文件
├── index.html
└── vite.config.ts
```


## 常见问题（FAQ）
- **Q: 启动时报错端口被占用？**
  A: 修改 `vite.config.ts` 中的 `port` 字段或关闭占用端口的进程。
- **Q: 构建后页面空白？**
  A: 检查 `vite.config.ts` 的 `base` 字段是否与部署路径一致。
- **Q: 如何添加新项目或数据集？**
  A: 在 `src/data/projects.ts` 或 `src/data/datasets.ts` 中补充元数据。
- **Q: 如何切换中英文？**
  A: 右上角点击“英文版”或“中文版”即可切换。

## 未来规划（Roadmap）
- [ ] 支持更多数据集格式与可视化类型
- [ ] 增加用户登录与权限管理
- [ ] 丰富项目交互式演示与在线实验
- [ ] 支持团队协作与评论功能
- [ ] 优化移动端体验

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
