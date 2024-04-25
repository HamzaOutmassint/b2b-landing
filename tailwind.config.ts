import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

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
      padding: '1rem',
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
        'errors' : 'var(--errors)',
        'light-strok' : 'var(--light-strok)',
        'gray-light' : 'var(--gray-light)',
        'navy-blue' : 'var(--navy-blue)'
      },
      screens: {
        'xs': '374px',
        "exactly-1024": { min: "1024px", max: "1024px" },
      },
      fontFamily: {
        sans: ["var(--font-primary)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config