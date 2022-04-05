module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'archivo': ['Archivo', 'sans-serif'],
    },
    extend: {
      colors: {
        'error-color': '#AD3C40',
        'first-color': '#CA38ED',
        'second-color': '#E487FB',
        'third-color': '#3E1149',
        'quarter-color': '#574E5A',
        'fifth-color': '#BCB1BF',
        'bg-primary': 'rgba(255, 255, 255, 0.47)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
