import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray: {
          10: '#8C8787',
          20: '#424242',
        },
      },
    },
  },
  plugins: [],
};
export default config;
