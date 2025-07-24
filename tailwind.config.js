/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        'input-text-bg': '#1f1f1f',
        'customPurp': '#8a73a2',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        '13': 'span 13 / span 13',
        '14': 'span 14 / span 14',
        '15': 'span 15 / span 15',
        '16': 'span 16 / span 16',
        '17': 'span 17 / span 17',
        '18': 'span 18 / span 18',
        '19': 'span 19 / span 19',
        '20': 'span 20 / span 20',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
      },
    },
  },
  plugins: [],
};
