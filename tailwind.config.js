module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        bounceArrow1: "bounceArrow 1.5s infinite ease-in-out",
        bounceArrow2: "bounceArrow 1.5s infinite ease-in-out 0.2s",
        bounceArrow3: "bounceArrow 1.5s infinite ease-in-out 0.4s",
      },
      colors: {
        dark: {
          50: "#434343",
          100: "#393939",
          200: "#2f2f2f",
          300: "#252525",
          400: "#1b1b1b",
          500: "#111111",
          600: "#070707",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
