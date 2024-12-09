import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-green": "#d5ff3f",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "120rem",
      },
      listStyleImage: {
        portal: 'url("../public/portal.png")',
      },
    },
  },
  plugins: [],
} satisfies Config;
