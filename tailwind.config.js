module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#68A6ED',
          DEFAULT: '#1A6DAF',
          dark: '#4F6CB7'
        },
        secondary: {
          light: '#2DC6C4',
          DEFAULT: '#25abbe',
          dark: '#007689'
        },
        third: {
          light: '#FF6F90',
          DEFAULT: '#F45EAC',
          dark: '#CF398B'
        },
        fourth: {
          light: '#FFBF83',
          DEFAULT: '#fdcd12',
          dark: '#C9A000'
        }
      },
      keyframes: {
        'slide-in-menu': {
          '0%': {
            transform: 'translate(-100%)'
          },
          '100%': {
            transform: 'translate(0%)'
          }
        },
        'slide-out-menu': {
          '0%': {
            transform: 'translate(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
      },
      animation: {
        'slide-in-menu': 'slide-in-menu .5s ease-in-out forwards',
        'slide-out-menu': 'slide-out-menu .5s ease-in-out forwards',
      }
    },
    backgroundColor: theme => ({
     ...theme('colors'),
      primary: {
        light: '#68A6ED',
        DEFAULT: '#1A6DAF',
        dark: '#4F6CB7'
      },
      'secondary': {
        light: '#2DC6C4',
        DEFAULT: '#25abbe',
        dark: '#007689'
      },
      'third': {
        light: '#FF6F90',
        DEFAULT: '#F45EAC',
        dark: '#CF398B'
      },
      'fourth': {
        light: '#FFBF83',
        DEFAULT: '#fdcd12',
        dark: '#C9A000'
      }
    }),
    backgroundImage: theme => ({
     'jumbo-cover': "url('/images/common/jumbo-cover.jpg'), cover, no-repeat"
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      primary: {
        light: '#68A6ED',
        DEFAULT: '#1A6DAF',
        dark: '#4F6CB7'
      },
      'secondary': {
        light: '#2DC6C4',
        DEFAULT: '#25abbe',
        dark: '#007689'
      },
      'third': {
        light: '#FF6F90',
        DEFAULT: '#F45EAC',
        dark: '#CF398B'
      },
      'fourth': {
        light: '#FFBF83',
        DEFAULT: '#fdcd12',
        dark: '#C9A000'
      }
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
