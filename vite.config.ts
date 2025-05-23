import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 9002, // Match original dev port if desired, Vite default is 5173
  },
  base: '/reach-hub/',
  build: {
    outDir: 'dist'
  }
})
