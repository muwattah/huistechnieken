import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1C1F24",
        "off-white": "#F7F5F2",
        "warm-gray": "#E8E4DF",
        "mid-gray": "#6B6661",
        accent: "#2F4A5E",
        success: "#2E5A3C",
        error: "#8B3A3A",
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
