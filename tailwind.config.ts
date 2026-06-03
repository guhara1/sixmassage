import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16201b",
        leaf: "#355f4f",
        mint: "#e9f3ed",
        gold: "#b48a3c",
        ivory: "#fbfaf5"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(22, 32, 27, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
