import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: { 100: '#E8ECE6', 500: '#849A80', 700: '#5C7058' },
        sand: { 50: '#FAF9F7', 100: '#F5F3EE', 500: '#E3DFD5' },
        ink: { light: '#5A6058', dark: '#2C332A' }
      },
    },
  },
  plugins: [],
};
export default config;