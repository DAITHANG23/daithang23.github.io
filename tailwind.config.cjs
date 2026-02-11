
import typographyPlugin from "@tailwindcss/typography";
import Typography from "./theme/__Theme.Typography";
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx,astro}",
  ],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    extend: {
      
      typography: {
        DEFAULT: {
          css: Typography,
        },
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        "glass-hover": "0 8px 32px rgba(0, 0, 0, 0.12)",
        button: "0 2px 4px rgba(0, 0, 0, 0.1)",
        "button-hover": "0 4px 8px rgba(0, 0, 0, 0.12)",
        "custom-blue": "0px 34px 80px rgba(46, 52, 121, 0.12)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },

  plugins: [typographyPlugin],
  
} 
