import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/5": "4 / 5",
        "8/5": "8 / 5",
        "4/3": "4 / 3"
      }
    },
  },
  plugins: [
    require("flowbite-typography")
  ]

};
export default config;
