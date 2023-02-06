import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: 'src/unity-player.ts',
      formats: ['es'],
    },
    rollupOptions: {
    },
  },
})
