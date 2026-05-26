import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: procress.env.VITE_BASE_PATH || "/LP_PRO2",
  plugins: [react()],
})
