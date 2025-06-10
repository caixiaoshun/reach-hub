<p align="right"><a href="./README.md">中文版</a></p>

# Reach Hub: Advanced Research Showcase Platform

A one-stop platform for showcasing research projects and datasets, designed for high-end fields such as remote sensing. Built with Vue 3, Vite, TypeScript, and Tailwind CSS, supporting responsive design and automated deployment.

## Project Overview
Reach Hub is a one-stop platform for managing and displaying research projects and datasets, tailored for remote sensing and other advanced research domains. It aims to provide efficient, standardized solutions for research teams, scholars, and developers. The platform is built with Vue 3, Vite, TypeScript, and Tailwind CSS, supporting responsive design and automated deployment to facilitate the dissemination and collaboration of scientific achievements.

## Background & Goals
- Solve the problem of scattered research projects and datasets lacking unified management and display.
- Lower the barriers for team collaboration and result promotion.
- Provide a beautiful, modern, and user-friendly frontend interface.

## Key Features
- 🚀 **Modern Tech Stack**: Vue 3 + Vite + TypeScript + Tailwind CSS for high performance.
- 📱 **Responsive Design**: Adapts to mobile, tablet, and desktop devices.
- 📊 **Card-based Project & Dataset Display**: Supports multi-tag, summary, author, year, and domain info.
- 🔍 **Smart Search & Filtering**: Search by keywords, tags, authors, and more.
- 🪄 **Unified User Experience**: Standardized components, navigation, notifications, and theme switching.
- 🖼️ **Rich Visualization & Demos**: Supports images and interactive demos for projects/datasets.
- ⚙️ **Automated Deployment**: GitHub Actions for CI/CD and deployment to GitHub Pages.
- 🌐 **Multi-language Support**: Switch between Chinese and English for international collaboration.

## Tech Stack
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## Requirements
- Node.js >= 18.x
- pnpm >= 8.x
- Latest Chrome/Edge browser recommended

## Getting Started
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
| Command           | Description                |
|-------------------|---------------------------|
| pnpm dev          | Start development server  |
| pnpm build        | Build for production      |
| pnpm preview      | Preview locally           |
| pnpm lint         | Lint code                 |
| pnpm typecheck    | TypeScript type checking  |

## Configuration
- Default dev port: `9002` (change in `vite.config.ts`)
- Build output: `dist/`
- Deployment path: To customize, edit the `base` field in `vite.config.ts`.
- Environment variables: Customize API endpoints etc. in `.env`.

## Project Structure
```text
reach-hub/
├── public/
├── src/
│   ├── assets/         # Static assets & images
│   ├── components/     # Component library
│   ├── composables/    # Composable functions
│   ├── data/           # Project & dataset metadata
│   ├── http/           # HTTP request wrappers
│   ├── router/         # Routing config
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   ├── views/          # Page views
│   └── main.ts         # Entry file
├── index.html
└── vite.config.ts
```

## Screenshots & Demo
> Insert homepage, project card, dataset detail screenshots here.

![Home Example](./src/assets/imageUrl/home_bg.jpg)

## FAQ
- **Q: Port already in use on startup?**
  A: Change the `port` in `vite.config.ts` or close the conflicting process.
- **Q: Blank page after build?**
  A: Check if the `base` in `vite.config.ts` matches your deployment path.
- **Q: How to add new projects or datasets?**
  A: Add metadata in `src/data/projects.ts` or `src/data/datasets.ts`.
- **Q: How to switch language?**
  A: Click the language link at the top right.

## Roadmap
- [ ] Support more dataset formats and visualization types
- [ ] Add user login and permission management
- [ ] Enrich interactive demos and online experiments
- [ ] Team collaboration and comments
- [ ] Optimize mobile experience

## Contributing
1. Fork this repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m 'feat: add feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

## Contact
- 📧 Email: [cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
- 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

## License
This project is licensed under the [MIT License](LICENSE).
