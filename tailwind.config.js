module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'portfolio-background': '#23263A',
        'portfolio-header': '#212336',
        'portfolio-blue': '#2E75E1',
        'portfolio-gray': '#CCCCCC'
      },
      fontFamily: {
        'spoqa-han-sans': ["'Spoqa Han Sans Neo'", 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}
