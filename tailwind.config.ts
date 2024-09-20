import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: 'class', Disable the darkmode
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
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
      }
    },
  },
  plugins: [
    require("flowbite-typography")
  ],
  safelist: [
    "bg-blue-100",
    "text-blue-800",
    "bg-yellow-100",
    "text-yellow-800",
    "bg-gray-100",
    "text-gray-800",
    "bg-red-100",
    "text-red-800",
    "dark:bg-blue-900",
    "dark:text-blue-300",
    "dark:bg-yellow-900",
    "dark:text-yellow-300",
    "dark:bg-gray-900",
    "dark:text-gray-300",
    "dark:bg-red-900",
    "dark:text-red-300"
  ]
};
export default config;
