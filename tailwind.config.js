module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {

      borderRadius: {
        'large': '20px',
        'xl': '14px'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontSize: {
        sm: '0.8rem',
        xs: '1.14rem',
        md: '1.35rem',
        'subtitle-sm': '3.5rem',
        'subtitle': '5.5rem',
        'xl': '2.1rem',
        '2xl': '3.1rem',
      }
    },
  },
  plugins: [],
}