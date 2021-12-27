const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Overpass', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '400',
              color: theme('colors.green.700')
            },
            h2: {
              fontWeight: '600'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
