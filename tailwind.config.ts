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
       blueIos:"#007AFF",
       placeholder: '##808080',
       placeHolder50:"#e5e5e5"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
