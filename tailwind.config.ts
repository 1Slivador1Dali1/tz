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
        breadcr: "#888888",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "120rem",
      },
      listStyleImage: {
        portal: 'url("../public/portal.svg")',
        portalmini: 'url("../public/portalmini.svg")',
      },
      backgroundImage: {
        footerbg: "url('../public/footer-img.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
