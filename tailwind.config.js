/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '640px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      xxxl: '2560px',
      xxl: '1920px',
    },
    extend: {},
  },
  plugins: [],
}