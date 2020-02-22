const tailwindFilterPlugin = require('tailwindcss-filters');
module.exports = {
  theme: {
    extend: {
      colors: {
        sdaniel: {
          100: '#1c1c1c',
          200: '#1c1b1b',
          transparent: 'rgba(0, 0, 0, 0.4)'
        }
      },
      borderWidth: {
        '1': '1px'
      },
      boxShadow: {
        sdaniel: '0px 0px 5px 3px rgba(10, 10, 10, 1)'
      }
    },

    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
      serif: ['"Open Sans"', 'sans-serif']
    },
    filter: {
      svg: 'drop-shadow( 0px 3px 3px #794ACF)'
    }
  },
  plugins: [tailwindFilterPlugin]
};
