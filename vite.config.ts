import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        importers: [],
      },
    }
  },
  resolve: {
    alias: {
      '@/styles': path.resolve(__dirname, './src', './shared', './static', './styles'),
      '@': path.resolve(__dirname, './src')
    }
  }
})
