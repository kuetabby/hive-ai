import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: "#0F1118",
        primaryColor: "#6728CA",
        primaryColorLight: "#A56DFF",
        primaryColorDark: "#4D19A0",
      },
    },
  },
  plugins: [],
};
export default config;
