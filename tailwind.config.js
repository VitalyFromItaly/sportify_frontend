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
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
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
      sans: ['Arimo', 'sans-serif'],
      serif: ['Arimo', 'serif']
    },
    extend: {
      rotate: {
        0: '0deg',
        180: '180deg'
      },
      width: {
        numberInput: '12rem',
        smallTextInput: ''
      },
      colors: {
        lightTeal: '#469BA2',
        middleTeal: '#327387',
        disabled: '#DFE0D8',
        mainGray: '#BEBEBC',
        dark: '#393939',
        darkContainer: '#525252',
        lightDark: '#585959',
        lightGray: '#F2F2F2',
        darkGray: '#BEBEBC',
        middleDark: '#525252',
        darkText: '#18181b',
        lightestTeal: '#CCE5E8'
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
    translate: ['active'],
    scale: ['active'],
    textColor: ['visited', 'hover', 'dark'],
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'] // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-border-gradients')()
  ]
};
