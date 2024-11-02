import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FEBE00",
        "primary-dark": "#FEBE00",
        accent: "#087c7c",
        gold: "#B59410",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        "dancing-script": ["var(--font-dancing-script)"],
        roboto: ["var(--font-roboto)"],
      },
    },
    fontSize: {
      "3xs": "0.5rem",
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
    },
  },
  plugins: [],
};
export default config;
