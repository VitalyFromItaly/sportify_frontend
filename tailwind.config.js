const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './stories/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left'
      },
      colors: {
        'lightTeal-middleTeal': ['#469BA2', '#327387']
      }
    },
    repeatingLinearBorderGradients: theme => ({
      directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
      colors: theme('linearBorderGradients.colors'), // defaults to {}
      lengths: {
        // defaults to {}
        sm: '25px',
        md: '50px',
        lg: '100px'
      }
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      cyan: colors.cyan,
      red: colors.red,
      rose: colors.rose,
      fuchsia: colors.fuchsia
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      width: {
        numberInput: '12rem',
        smallTextInput: ''
      },
      colors: {
        lightTeal: '#469BA2',
        middleTeal: '#327387',
        disabled: '#DFE0D8',
        disabledTextPrimary: '#BEBEBC',
        dark: '#393939',
        lightDark: '#585959',
        lightGray: '#F2F2F2'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    textColor: ['visited', 'hover'],
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'] // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-border-gradients')()
  ]
};
