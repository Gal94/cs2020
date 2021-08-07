const setSpacing = () => {
  let obj = {}
  for (let i = 0; i < 100; i++) {
    obj[i] = i * 4 + 'px'
  }
  return obj
}


module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    spacing: setSpacing(),
    colors: {
      lightWhite: '#F5F3F4',
      hardGray: '#B1A7A6',
      softRed: '#E5383B',
      ruby: '#A4161A',
      black: '#161A1D',
      redSalsa: '#F94144',
      orange: '#F3722C',
      mango: '#F9844A',
      maize: '#F9C74F',
      green: '#90BE6D',
      zomp: '#43AA8B',
      cadet: '#4D908E',
      queenBlue: '#577590',
      blue: '#277DA1'
    },
    fontFamily: {
      'cairo': ['Cairo', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}

