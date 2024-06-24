/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        leave: "var(--leave)",
      },
      fontFamily: {
        oldschoolGrotesk: ["oldschoolGrotesk", "sans-serif"],
      },

      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(25deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(25deg)" },
          "50%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(-4deg)" },
          "70%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "logo-cloud": "logo-cloud 60s linear infinite", // Adjust duration and timing as needed for your design.
          wave: "wave 1.5s ease-in-out infinite",// Adjust duration and timing as needed for your design.
      },
    },
  },
  plugins: [],
};
