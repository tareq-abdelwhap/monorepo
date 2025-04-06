const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        maxWidth: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(82deg, #C78DC3 -9.19%, #7C91DB 110.08%)',
        'gradient-2':
          'linear-gradient(85deg, #C78DC3 -18%, #D98DCB 10.19%, #A88ED2 43.93%, #948FD7 80.07%, #7C91DB 109.42%)',
        'gradient-3':
          'linear-gradient(86deg, #D16BA5 -14.21%, #BA83CA 15.03%, #9A9AE1 43.11%, #69BFF8 74.29%, #52CFFE 90.94%, #5FFBF1 111.44%)',
        'gradient-4':
          'linear-gradient(86deg, #1EBEA5 -14.21%, #00B5C4 18.25%, #00A8E6 52.49%, #0096FD 81.67%, #157AFB 111.44%)',
      },
      colors: {
        primary: {
          1: '#F3ECFD',
          2: '#E7D9FC',
          3: '#B68EF6',
          4: '#9D68D3',
          5: '#7F39EF',
          6: '#792FEE',
          7: '#6C1DED',
        },
        neutral: {
          white: '#FFFFFF',
          gray: {
            1: '#F5F5F5',
            2: '#EBEBEB',
            3: '#E0E0E0',
            4: '#D4D4D4',
            5: '#CCCCCC',
            6: '#C2C2C2',
            7: '#B8B8B8',
            8: '#ADADAD',
            9: '#A3A3A3',
            10: '#999999',
            11: '#8F8F8F',
            12: '#858585',
            13: '#7A7A7A',
            14: '#707070',
            15: '#666666',
            16: '#5C5C5C',
            17: '#525252',
            18: '#474747',
            19: '#3D3D3D',
            20: '#333333',
            21: '#292929',
            22: '#1F1F1F',
            23: '#141414',
            24: '#0A0A0A',
          },
          black: '#000000',
        },
        info: {
          blue: {
            1: '#ebf3ff',
            2: '#d7e8fe',
            3: '#b6bafd',
            4: '#4a97fc',
            5: '#157afb',
            6: '#0375fb',
            7: '#046bf1',
          },
        },
        success: {
          green: {
            1: '#edfcfa',
            2: '#dcf9f5',
            3: '#83ecdc',
            4: '#3de1c8',
            5: '#1ebea5',
            6: '#1cb09a',
            7: '#199f8b',
          },
        },
        warning: {
          yellow: {
            1: '#fff9eb',
            2: '#fff3d6',
            3: '#ffe29a',
            4: '#fed05d',
            5: '#feca43',
            6: '#fec534',
            7: '#febf20',
          },
        },
        error: {
          red: {
            1: '#fbeef1',
            2: '#f7dee2',
            3: '#e17a8b',
            4: '#d9596e',
            5: '#d23852',
            6: '#c82d47',
            7: '#b72a41',
          },
        },
      },

      fontFamily: { nunito: ['Nunito', 'sans-serif'] },

      fontSize: {
        // Source Sans Pro - Major Second (1.125) with base size 16px
        'nun-h1': ['96px', { lineHeight: '104px' }],
        'nun-h2': ['60px', { lineHeight: '68px' }],
        'nun-h3': ['48px', { lineHeight: '56px' }],
        'nun-h4': ['34px', { lineHeight: '42px' }],
        'nun-h5': ['24px', { lineHeight: '36px' }],
        'nun-h6': ['20px', { lineHeight: '28px' }],
        'nun-regular': ['16px', { lineHeight: '24px' }],
        'nun-sm': ['14px', { lineHeight: '24px' }],
        'nun-sx': ['12px', { lineHeight: '24px' }],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
