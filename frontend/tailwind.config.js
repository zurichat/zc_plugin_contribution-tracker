module.exports = {
  prefix: 'ct-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#00B87C',
        backdrop:'rgba(64, 79, 74, 0.5)'
      },
      Width: {
        '4.5': '18px',
        '25': '98px'
      },
      Height: {
        '4.5': '18px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
