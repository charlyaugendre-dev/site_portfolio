import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' => le site fonctionne aussi bien sur un domaine perso
// que sur une URL GitHub Pages du type https://pseudo.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: './',
})
