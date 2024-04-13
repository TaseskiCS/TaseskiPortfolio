/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "dark": {
          "50": "#434343",
          "100": "#393939",
          "200": "#2f2f2f",
          "300": "#252525",
          "400": "#1b1b1b",
          "500": "#111111",
          "600": "#070707",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000"
        }
      },
    },
  },
  plugins: [],
}