/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({
  addUtilities
}) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
  })
})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#455d58",
        primary2: "#0EBA39",
        primary3: "#086820FC",
        primary4: "#8CCE9D38",
        primary5: "#FAFAFA",
        outline1: "#8CCE9D"
      },
    },
  },
  plugins: [require("daisyui"), Myclass],
}