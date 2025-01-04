import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { replaceCodePlugin } from 'vite-plugin-replace'

export default defineConfig({
  plugins: [
    react(),
    replaceCodePlugin({
      replacements: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
  ],
  base: './',
})
