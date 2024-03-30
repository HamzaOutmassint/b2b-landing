import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 'primary' : '#3BACF9',
      // 'black' : '#0A1F44',
      // 'gray-bold' : '#758196',
      // 'white' : 'FFFFFF',
      // // 'primary-gradient' : 'linear-gradient(108deg, #bfe5ff -102.41%, #3bacf9 32.94%)'
      // 'light-strok' : '#A6AEBC',
      // 'gray-light' : '#F8F8F8'
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config