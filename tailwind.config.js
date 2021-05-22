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
