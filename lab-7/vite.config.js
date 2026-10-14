import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' — відносні шляхи, щоб зібраний застосунок працював на GitHub Pages у підпапці
export default defineConfig({
  plugins: [react()],
  base: './',
})
