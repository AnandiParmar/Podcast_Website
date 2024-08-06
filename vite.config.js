import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { TailwindPlugin } from 'vite-plugin-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
