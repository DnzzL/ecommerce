module.exports = {
  content: [
    './apps/ecommerce/src/components/**/*.{html,tdx}',
    './apps/ecommerce/src/pages/**/*.{html,tsx}',
    './apps/ecommerce/src/index.html',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
