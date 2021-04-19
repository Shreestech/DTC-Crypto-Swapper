module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'teal':'#008080',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
