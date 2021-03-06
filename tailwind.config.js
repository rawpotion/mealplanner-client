module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: { extend: { backgroundColor: ['active'] } },
  plugins: [],
}
