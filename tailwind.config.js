import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'index-bg': "url('/images/index-bg.png')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'C7573B': '#C7573B',
      '482522': '#482522',
      'FFFBEB': '#FFFBEB',
      '90604D': '#90604D',
      'F5EDD0': '#F5EDD0',
      '692A1B': '#692A1B',
      'D44926': '#D44926',
      'F49F0A': '#F49F0A',
      'B8DAF0': '#B8DAF0',
      '80352F': '#80352F',
      'black': '#000000',
      'white': '#ffffff',
      '1A1818': '#1A1818',
      '2D3134': '2D3134'
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#000000", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#D44926",
          },
          // ... rest of the colors
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  })],
}
