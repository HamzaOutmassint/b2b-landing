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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'primary' : 'var(--primary)',
        'black' : 'var(--black)',
        'gray-bold' : 'var(--gray-bold)',
        'white' : 'var(--white)',
        // 'primary-gradient' : 'linear-gradient(108deg, #bfe5ff -102.41%, #3bacf9 32.94%)'
        'light-strok' : 'var(--light-strok)',
        'gray-light' : 'var(--gray-light)'
      },
      screens: {
        "exactly-1024": { min: "1024px", max: "1024px" },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config