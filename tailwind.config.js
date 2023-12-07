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
    // https://github.com/jamiebuilds/tailwindcss-animate
    require('tailwindcss-animate'),
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
    // https://daisyui.com/docs/config
    require('daisyui'),
  ],
  daisyui: {
    themes: true,
    darkTheme: 'black',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
}
