/** Vite config: React (JSX/refresh) + Tailwind v4 via @tailwindcss/vite. No path aliases by default. */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [      tailwindcss(),   react()],
})
