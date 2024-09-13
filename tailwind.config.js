/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: {
          DEFAULT: "#E65F2B", // default color
          10: "rgba(230, 95, 43, 0.1)",  // 10% opacity
          20: "rgba(230, 95, 43, 0.2)",  // 20% opacity
          30: "rgba(230, 95, 43, 0.3)",  // 30% opacity
          40: "rgba(230, 95, 43, 0.4)",  // 40% opacity
          50: "rgba(230, 95, 43, 0.5)",  // 50% opacity
          60: "rgba(230, 95, 43, 0.6)",  // 60% opacity
          70: "rgba(230, 95, 43, 0.7)",  // 70% opacity
          80: "rgba(230, 95, 43, 0.8)",  // 80% opacity
          90: "rgba(230, 95, 43, 0.9)",  // 90% opacity
        },
      },
    },
  },
  plugins: [],
};
