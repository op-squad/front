import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000022",
        "blue-custom": "#393DD8",
        "gray-input": "#B9BEBF",
        "gray-input-border": "#DEE4E6",
      },
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
