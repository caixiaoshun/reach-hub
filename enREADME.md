<p align="right"><a href="./README.md">中文版</a></p>

# Reach Hub: Advanced Scientific Research Showcase Platform

A one-stop platform for showcasing scientific projects and datasets, designed for high-end research fields such as remote sensing. Built with Vue 3, Vite, TypeScript, and Tailwind CSS, supporting responsive design and automated deployment.

## Features
- 🚀 Modern tech stack: Vue 3 + Vite + TypeScript + Tailwind CSS
- 📱 Responsive layout for all devices
- 📊 Card-based display for projects and datasets, with search and filter support
- 🪄 Unified interaction experience with standardized components
- ⚙️ Automated deployment to GitHub Pages via GitHub Actions

## Tech Stack
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## Quick Start
```bash
# Clone the repository
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
# Start development server
pnpm dev
```
Visit [http://localhost:9002](http://localhost:9002) in your browser.

### Common Scripts
| Command         | Description            |
|----------------|------------------------|
| pnpm dev       | Start development      |
| pnpm build     | Build for production   |
| pnpm preview   | Local preview          |
| pnpm lint      | Lint code              |
| pnpm typecheck | TypeScript type check  |

## Build & Deploy
```bash
pnpm build
```
The build output is in `dist/`. Push to the `master` branch to auto-deploy to GitHub Pages.

> To customize the repo path, modify the `base` field in `vite.config.ts`.

## Directory Structure
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
1. Fork this repo
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add feature'`
4. Push to remote: `git push origin feature/my-feature`
5. Open a Pull Request

## Contact
- 📧 Email: [cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## License
This project is licensed under the [MIT](LICENSE) License.
