# 🌐 Reach Hub Vue

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern, responsive frontend platform built with Vue 3 and Vite for showcasing research projects and datasets—especially in the field of remote sensing.

🔗 **Live Demo**: [https://caixiaoshun.github.io/reach-hub/#/](https://caixiaoshun.github.io/reach-hub/#/)

---

## ✨ Features

* ⚡ **Modern Tech Stack**: Vue 3 + Vite + TypeScript + Tailwind CSS for rapid development and a sleek UI.
* 📱 **Responsive Design**: Optimized layout across all screen sizes.
* 📊 **Project & Dataset Display**: Clean card-style views for projects and datasets, with custom toast notifications for user actions.
* 統一 **Consistent UI/UX**: Standardized navigation elements (back buttons, breadcrumbs) and interactive components.
* 🚀 **GitHub Pages Deployment**: Automatic CI/CD with GitHub Actions.

---

## 🛠️ Tech Stack

* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [pnpm](https://pnpm.io/)
* [GitHub Actions](https://github.com/features/actions)

---

## 📦 Installation

```bash
git clone https://github.com/caixiaoshun/reach-hub.git
cd reach-hub
pnpm install
```

---

## 🧪 Getting Started

### ✅ Prerequisites

Ensure the following are installed:

* [Node.js](https://nodejs.org/) (v18+)
* [pnpm](https://pnpm.io/) (v8+)

### 🧰 Available Commands

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the development server         |
| `pnpm build`   | Build the project for production     |
| `pnpm preview` | Preview the built app locally        |
| `pnpm lint`    | Run ESLint for code quality checking |
| `pnpm typecheck` | Run TypeScript type checking       |
<!-- TODO: Add pnpm test when tests are implemented -->

---

## 💻 Development

```bash
pnpm dev
```

Runs the app in development mode:
Open [http://localhost:9002](http://localhost:9002) (or the port Vite assigns) to view it in your browser.

---

## 📦 Build for Production

```bash
pnpm build
```

The output will be located in the `dist/` directory.

---

## 🚀 Deployment

Pushing to the `master` branch triggers a GitHub Actions workflow that:

* Builds the project using `pnpm build`
* Publishes the contents of `dist/` to the `gh-pages` branch
* Deploys to GitHub Pages at the URL listed above

Make sure your `vite.config.ts` includes:

```ts
export default defineConfig({
  base: '/reach-hub/' // Replace 'reach-hub' with your repository name if different
});
```

---

## 📁 Project Structure

```bash
reach-hub/
├── public/                 # Static assets (e.g., favicon.png)
├── src/
│   ├── assets/             # Images, icons, etc. (processed by Vite)
│   ├── components/         # Reusable Vue components (UI, layout, shared)
│   ├── composables/        # Vue Composition API functions (e.g., useToast)
│   ├── data/               # Mock data for projects, datasets
│   ├── http/               # Axios HTTP client configuration
│   ├── router/             # Vue Router configuration
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── views/              # Route-level components (pages)
│   └── App.vue             # Root app component
│   └── main.ts             # Main application entry point
├── .github/workflows/      # GitHub Actions CI/CD configuration
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── pnpm-lock.yaml          # pnpm lockfile
└── vite.config.ts          # Vite build configuration
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add something cool'`
4. Push to GitHub: `git push origin feature/my-feature`
5. Open a Pull Request 🎉

---

## 📬 Contact

Feel free to reach out:

* 📧 Email: [cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
* 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

---

## 🙏 Acknowledgments

* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
