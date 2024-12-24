import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', //isProduction ? '/drinks-recipes-finder/' : '/',
})
