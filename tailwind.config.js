/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero1': "url('https://raw.githubusercontent.com/tyfnacici/react-projects/main/getir-clone-tailwind/src/images/hero/hero1.jpg')",
        'hero2': "url('https://raw.githubusercontent.com/tyfnacici/react-projects/main/getir-clone-tailwind/src/images/hero/hero2.jpg')",
        'hero3': "url('https://raw.githubusercontent.com/tyfnacici/react-projects/main/getir-clone-tailwind/src/images/hero/hero3.jpg')",
        }),
    },
  },
  plugins: [],
}

