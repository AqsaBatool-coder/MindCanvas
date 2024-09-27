import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-white': '0px 4px 21px 0px rgba(0, 0, 0, 0.11)',
      },
      colors: {
        primary: '#FF885B',
        "primary-light": '#FFE5CF',
      },
    },
  },
  plugins: [],
};
export default config;
