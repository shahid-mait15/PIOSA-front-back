/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["'Stardom'", "Stardom-Regular"], // Use the font family name here
      },
      colors: {
        customNavy: '#0e1442', // Note the `#` symbol
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #000000 35%, #3b0a45 65%)',
       
      },
      boxShadow: {
        'custom-gradient': '0 4px 10px rgba(0, 0, 0, 0.5)',
      },

    },
  },
  plugins: [],
}



