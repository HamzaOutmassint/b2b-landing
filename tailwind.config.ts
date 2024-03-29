import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary' : '#3BACF9',
        'black' : '#0A1F44',
        'gray-bold' : '#758196',
        'white' : 'FFFFFF',
        // 'primary-gradient' : 'linear-gradient(108deg, #bfe5ff -102.41%, #3bacf9 32.94%)'
        'light-strok' : '#A6AEBC',
        'gray-light' : '#F8F8F8'
      }
    },
  },
  plugins: [],
};
export default config;
