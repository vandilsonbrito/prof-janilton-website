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
        'hero-image': "url('../public/hero-image.jpg')",
        'about-image': "url('../public/about-pic.jpg')"
      },
      colors: {
        'main-blue': '#2b2da1'
      },
    },
  },
  plugins: [],
};
export default config;
