import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const allowedHost = env.VITE_ALLOWED_HOST

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      strictPort: true,
      allowedHosts: allowedHost ? [allowedHost] : [],
    },
    preview: {
      host: '0.0.0.0',
      strictPort: true,
      allowedHosts: allowedHost ? [allowedHost] : [],
    },
  }
})
