// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  fileCase: 'kebabCase',
  react: 'vite',
  preferESM: true,
  tailwindCSS: true,
  unocss: false,
})
