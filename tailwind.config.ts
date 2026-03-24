import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["'Lexend'", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#80C97A",
          teal: "#5BB4A9",
          dark: "#1a1a1a",
          gray: "#4a4a4a",
          lightgray: "#575555",
          purple: "#AC70E9",
          orange: "#E89B5C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
