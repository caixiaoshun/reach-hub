# Reach Hub Vue

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Reach Hub is a polished platform built with Vue 3 and Vite for presenting scientific projects and datasets. It aims to deliver a smooth user experience and is especially suitable for remote sensing applications.

## Features
- ⚡ **Modern Stack**: Vue 3, Vite, TypeScript and Tailwind CSS for high performance.
- 🌐 **Multi-language Interface**: Built-in Chinese, English and Tibetan support.
- 📱 **Responsive Layout**: Consistent experience on mobile, tablet and desktop.
- 📊 **Project & Dataset Management**: Card-based layout with search and filtering to quickly locate content.
- 🔍 **Instant Search & Skeleton Loading**: Blur search with skeleton screens for seamless interaction.
- 🚀 **Automated Deployment**: CI/CD workflow publishes to GitHub Pages on every push.

## Tech Stack
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## Getting Started
```bash
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
```

### Commands
| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview the built app |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript checks |

## Development
```bash
pnpm dev
```
Open [http://localhost:9002](http://localhost:9002) in your browser.

## Build & Deployment
```bash
pnpm build
```
The output is in `dist/`. Pushing to `master` automatically deploys to GitHub Pages.

### `vite.config.ts` Example
```ts
export default defineConfig({
  base: '/reach-hub/' // Update if your repository name differs
});
```

## Project Structure
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

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add feature'`
4. Push to remote: `git push origin feature/my-feature`
5. Open a Pull Request

## Contact
- 📧 Email: [cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## Acknowledgments
- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Lucide Icons

## License
This project is released under the [MIT License](LICENSE).
