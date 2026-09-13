const { colors } = require('./src/shared/colors')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Sora: ['Sora', 'sans-serif']
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      height: {
        button: 57,
      },
      colors,
    },
  },
  plugins: [],
}