/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#42446E",
          // secondary: "#05264e",
          accent: "#4f5e64",
          neutral: "#66789c",
          info: "#e0e6f7",
          textLight: "#66789c",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
