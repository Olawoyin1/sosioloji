// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: Ensure this matches your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [typography], // ← Add plugin here
};

export default config;
