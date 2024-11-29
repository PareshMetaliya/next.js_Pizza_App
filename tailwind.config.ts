import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      

      container: {
        center: true, // Keep the container centered
        padding: '2rem', // Consistent padding inside the container
        screens: {
          '2xl': '1400px', // Custom screen size for 2xl
        },
      },      
      colors: {
        customYellow: '#F1C93B',
        customBrown: '#342B2B',
        customDark: '#171A1F',
        customGray: '#514343',
        customGreen: '#1A5D1A',
        customGrayDark: '#9e9d9d',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      backgroundImage: {

        'hero': 'linear-gradient(to bottom right, #ffffff 30%, rgba(241, 201, 59, 0.6) 80%)',
        'login': "url('/image/login page background.jpg')",
        'navbar': 'linear-gradient(to right, #ffffff 70%, rgba(241, 201, 59, 0.6) 140%)',

      },
      backgroundColor: {
        'light-yellow': 'rgba(241, 201, 59, 0.1)', // Custom 5% opacity background
      },
    },
  },
  plugins: [],
} satisfies Config;
