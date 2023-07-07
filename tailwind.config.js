/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        consPrimary: "#f7f8fa",
        consGrayBlue50: "#4D5E80",
        consGrayBlue60: "#6B7A99",
        consGrayBlue70: "#7D8FB3",
        consGrayBlue80: "#ADB8CC",
        consPurple: "#8833FF"
      },
    },
  },
  plugins: [require("daisyui")],
};
