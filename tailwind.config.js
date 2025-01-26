/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        sans:["Cabin", "serif"],
        serif:["Space Grotesk", "serif"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          lg: "2rem",
          
        },
        
      }
    },
  },
  plugins: [],
}

