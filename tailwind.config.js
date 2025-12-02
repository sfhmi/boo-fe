/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      DEFAULT: "0 0 20px rgba(255, 255, 255, 0.19)",
      sm: "0 0 30px rgba(255, 255, 255, 0.08)",
      md: "0 0 50px rgba(255, 255, 255, 0.12)",
      lg: "0 0 60px rgba(255, 255, 255, 0.12)",
      xl: "0 0 75px rgba(255, 255, 255, 0.14)",
      "2xl": "0 0 90px rgba(255, 255, 255, 0.16)",
    },
    extend: {
      boxShadow: {
        "white-glow": "0 0 50px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
