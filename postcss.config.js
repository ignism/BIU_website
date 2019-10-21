module.exports = ({ options }) => ({
  plugins: {
    'postcss-import': {},
    'tailwindcss': 'tailwind.js',
    'postcss-nested': {},
    'autoprefixer': {},
    'cssnano': options.cssnano
  }
})