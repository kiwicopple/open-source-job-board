module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#000',
        'brand-light': '#dedede',
      },
    },
    borderColor: '#000',
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
