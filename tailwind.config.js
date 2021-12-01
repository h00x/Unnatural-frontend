const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.cyan,
      red: colors.rose,
      gray: colors.warmGray,
      white: colors.white,
      myGray: {
        50: '#f5f5f6',
        100: '#ebecec',
        200: '#cecfd0',
        300: '#b0b2b4',
        400: '#74797b',
        500: '#393f43',
        600: '#33393c',
        700: '#2b2f32',
        800: '#222628',
        900: '#1c1f21',
      },
      creme: {
        50: '#fffefe',
        100: '#fffefd',
        200: '#fffcfa',
        300: '#fffbf7',
        400: '#fff7f1',
        500: '#fff4eb',
        600: '#e6dcd4',
        700: '#bfb7b0',
        800: '#99928d',
        900: '#7d7873',
      },
      riptide: {
        50: '#fafefd',
        100: '#f4fdfc',
        200: '#e5fbf7',
        300: '#d5f8f1',
        400: '#b5f3e7',
        500: '#95eedd',
        600: '#86d6c7',
        700: '#70b3a6',
        800: '#598f85',
        900: '#49756c',
      },
      pink: {
        50: '#fffcfc',
        100: '#fff9f9',
        200: '#fff0f0',
        300: '#ffe7e7',
        400: '#ffd6d6',
        500: '#ffc4c4',
        600: '#e6b0b0',
        700: '#bf9393',
        800: '#997676',
        900: '#7d6060',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '10vw': '10vw',
        '8vw': '8vw',
      },
      boxShadow: {
        'reverse-xl': '0 0 25px 0 rgba(0, 0, 0, 0.25)',
        'reverse-2xl': '0 0 50px 0 rgba(0, 0, 0, 0.25)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
