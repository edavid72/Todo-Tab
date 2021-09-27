module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#F3F1F5',
      darkgrey: '#C9CCD5',
      dark: '#222831',
      navy: '#30475E',
      red: '#F05454',
    },
    screens: {
      tablet: '768px',
      // => @media (min-width: 640px) { ... }

      laptop: '1366px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
