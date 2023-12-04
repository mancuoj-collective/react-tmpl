const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // https://github.com/egoist/tailwindcss-icons
    iconsPlugin({
      collections: getIconCollections(['lucide', 'carbon']),
    }),
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    // https://daisyui.com/docs/config
    themes: true,
    darkTheme: 'sunset',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
}
