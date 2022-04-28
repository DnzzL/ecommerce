module.exports = {
  content: [
    './apps/ecommerce/src/components/**/*.{html,tsx}',
    './apps/ecommerce/src/pages/**/*.{html,tsx}',
    './apps/ecommerce/src/index.html',
  ],
  theme: {
    fontFamily: {
      body: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'pale-orange': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'hsl(26, 100%, 55%)',
          'primary-focus': 'hsl(26, 100%, 55%)',
          'primary-content': 'hsl(0, 0%, 100%)',
          accent: 'hsl(25, 100%, 94%)',
          neutral: 'hsl(219, 9%, 45%)',
          'base-100': 'hsl(0, 0%, 100%)',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
