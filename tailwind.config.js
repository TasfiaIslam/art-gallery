module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F4E274',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'handgloves'],
      },
      animation: {
        leftToRight: 'leftToRight 0.4s ease-out 0.2s',
      },
      keyframes: {
        leftToRight: {
          '0%': { width: '0%' },
          '50%': { width: '50%' },
          '75%': { width: '75%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
