module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',

      common: {
        white: '#fff',
        black: '#000',
      },

      primary: '#FB2E86',
      blue: {
        600: '#8A8FB9',
        650: '#151875',
        700: '#1A0B5B',
        800: '#0D0E43',
      },
      fushia: {
        900: '#7E33E0',
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],

      primary: ['Josefin Sans', 'sans-serif'],
      secondary: ['Lato', 'Josefin Sans', 'sans-serif'],
    },
    extend: {
      gap: {
        DEFAULT: '0.625rem',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
