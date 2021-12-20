//꾸밀때 필요한 모듈

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage: theme => ({
        'nfhero': "url('/images/BG2.jpg')",
       })

    },
  },
  plugins: [],
}
