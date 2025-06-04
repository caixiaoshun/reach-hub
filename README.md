# Reach Hub 高端科研展示平台

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

一款基于 Vue 3 和 Vite 打造的現代化科研項目與數據集展示平台，尤其適用於遙感領域。

## 功能亮點
- ⚡ **現代化技術棧**：Vue 3 + Vite + TypeScript + Tailwind CSS，構建高性能前端。
- 📱 **響應式設計**：在手機、平板與桌面端均能保持出色體驗。
- 📊 **項目與數據集展示**：卡片化界面，並提供便捷的搜索與篩選。
- 🪄 **一致的交互**：標準化導航與提示組件，保持統一用戶體驗。
- 🚀 **GitHub Pages 自動部署**：CI/CD 全程自動完成。

## 技術棧
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## 快速開始
```bash
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
```

### 常用腳本
| 命令            | 說明                     |
| --------------- | ------------------------ |
| `pnpm dev`      | 啟動開發服務             |
| `pnpm build`    | 構建生產包               |
| `pnpm preview`  | 本地預覽                 |
| `pnpm lint`     | 代碼檢查                 |
| `pnpm typecheck`| TypeScript 類型檢查      |

## 本地開發
```bash
pnpm dev
```
瀏覽器打開 [http://localhost:9002](http://localhost:9002) 查看效果。

## 構建與部署
```bash
pnpm build
```
產物位於 `dist/` 目錄。推送到 `master` 分支即觸發 CI，自動部署到 GitHub Pages。

### `vite.config.ts` 範例
```ts
export default defineConfig({
  base: '/reach-hub/' // 如倉庫名稱不同，請相應修改
});
```

## 項目結構
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

## 貢獻指南
1. Fork 本倉庫
2. 新建分支 `git checkout -b feature/my-feature`
3. 提交修改 `git commit -m 'feat: add feature'`
4. 推送到遠端 `git push origin feature/my-feature`
5. 發起 Pull Request

## 聯繫方式
- 📧 郵箱：[cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## 致謝
- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Lucide Icons

## Markdown 翻译
借助脚本可在中文和英文 Markdown 之间互相转换：

```bash
npm run translate-md README.en.md README.auto.zh.md en zh
```

上述命令会把 `README.en.md` 从英文翻译为中文，并保存为
`README.auto.zh.md`。语言代码可按需调整。

## 许可证
本項目遵循 [MIT](LICENSE) 許可協議。
