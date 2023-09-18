/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
      }
    },
  },
  safelist: [
    'grid-cols-18',
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    'col-start-8',
    'col-start-9',
    'col-start-10',
    'col-start-11',
    'col-start-12',
    'col-start-13',
    'col-start-14',
    'col-start-15',
    'col-start-16',
    'col-start-17',
    'col-start-18',
    'row-start-8',
    'row-start-9',
  ],
  plugins: [],
}

