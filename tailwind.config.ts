import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
