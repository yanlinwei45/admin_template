import { defineConfig , loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const {VITE_API_BASE, VITE_API_BASE_URL} = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      codeInspectorPlugin({
        bundler: 'vite'
      }),
      svgr()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        [VITE_API_BASE]: {
          target: VITE_API_BASE_URL,
          changeOrigin: true,
          headers: {
            "ngrok-skip-browser-warning": "true"
          }
        }
      }
    }
  }
})
