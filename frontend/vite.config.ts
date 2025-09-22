import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-13bpm2ttn-sonalikas-projects.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path // Keep the path as is
      }
    }
  }
})
