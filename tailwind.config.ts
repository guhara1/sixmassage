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
        ink: "#f7fff7",
        leaf: "#a8ff2f",
        mint: "#10180f",
        gold: "#ccff00",
        ivory: "#050705"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(168, 255, 47, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
