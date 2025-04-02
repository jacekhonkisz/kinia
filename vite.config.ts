import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  base: process.env.NODE_ENV === 'production' && process.env.VERCEL !== 'true' 
    ? '/kinia/' 
    : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      overlay: true
    }
  }
}) 