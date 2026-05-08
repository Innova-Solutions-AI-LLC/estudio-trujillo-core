import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackStart(), // must come before react()
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
  ],
})
