import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // base: '/TypeScript-and-Vue.js-V2.0/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 
