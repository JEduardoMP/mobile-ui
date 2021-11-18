module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins'],
    },
    colors: {
      black: '#060606',
      blue: '#3988F6',
      lightBlue: '#D8E6FC',
      white: '#FFFFFF',
      purple: '#9482FE',
      lightGray: '#00000029',
      gray: '#7E7E8B'
    },
    width: {
      fav: '400px',
      img: '950px',
      imgsmall: '750px',
      container: '80%',
      box: '90%',
      full: '100%',
      medium: '48%',
      third: '30%',
      seventy: '65%',
    },
    screens: {
      'small': {'max': '360px'}
    },
    borderRadius: {
      circle: '50%',
      sm: '0.125rem',
      normal: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}