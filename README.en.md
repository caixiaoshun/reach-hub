# Reach Hub Vue

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A polished frontend solution built with Vue 3 and Vite for showcasing research projects and datasets, particularly in the field of remote sensing.

## Features
- ⚡ **Modern Stack**: Vue 3 + Vite + TypeScript + Tailwind CSS.
- 📱 **Responsive Design**: Works great on phones, tablets and desktops.
- 📊 **Project & Dataset Display**: Card layout with handy search and filtering.
- 🪄 **Consistent UX**: Standard navigation components and notifications.
- 🚀 **Automated GitHub Pages Deployment**.

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
| Command         | Description                   |
| --------------- | ----------------------------- |
| `pnpm dev`      | Start the development server  |
| `pnpm build`    | Build for production          |
| `pnpm preview`  | Preview the built app locally |
| `pnpm lint`     | Run ESLint                    |
| `pnpm typecheck`| Run TypeScript type checking  |

## Development
```bash
pnpm dev
```
Visit [http://localhost:9002](http://localhost:9002) to view the app.

## Build & Deployment
```bash
pnpm build
```
The build output will be in `dist/`. Pushing to the `master` branch triggers CI to deploy to GitHub Pages.

### `vite.config.ts` Example
```ts
export default defineConfig({
  base: '/reach-hub/' // Update if your repo name differs
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
3. Commit your changes: `git commit -m 'feat: add something cool'`
4. Push: `git push origin feature/my-feature`
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
This project is licensed under the [MIT License](LICENSE).
