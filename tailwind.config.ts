import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://placehold.co/600x400')",
      },
      colors: {
        background: "var(--background)",
        primary: { 300: "var(--primary-300)", DEFAULT: "var(--primary)" },
        light: "var(--light)",
        dark: "var(--dark)",

        gray: { 800: "var(--gray-800)" },
      },
    },
  },
  plugins: [],
};
export default config;
