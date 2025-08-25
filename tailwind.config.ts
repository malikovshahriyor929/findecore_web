import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        fira: ["var(--font-fira)", "fira"],
      },
    },
  },
  plugins: [],
};
export default config;
