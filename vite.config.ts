import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: 'index.html',
      formats: ['es'],
    },
    rollupOptions: {
    },
  },
})
