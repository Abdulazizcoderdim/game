/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        main1: "url('/main1.png')",
        main2: "url('/main2.png')",
      },
    },
  },
  plugins: [],
};
