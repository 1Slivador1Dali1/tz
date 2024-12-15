import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   xsss: "320px",
    //   xss: "375px",
    //   xs: "440px",
    //   // sm: "640px",
    //   // lg: "1024px",
    //   // xl: "1280px",
    // },
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
        tel: 'url("../public/tel.svg")',
        mail: 'url("../public/mail.svg")',
        wp: 'url("../public/watp.svg")',
        tg: 'url("../public/tg.svg")',
      },
      backgroundImage: {
        footerbg: "url('../public/footer-img.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
