import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        "bg-main": "var(--bg-main)",
        "bg-card": "var(--bg-card)",
        "bg-card-alt": "var(--bg-card-alt)",
        "bg-card-hover": "var(--bg-card-hover)",
        purple: "var(--purple)",
        "purple-light": "var(--purple-light)",
        "purple-dim": "var(--purple-dim)",
        brandblue: "var(--blue)",
        brandpink: "var(--pink)",
        brandcyan: "var(--cyan)",
        "green-wa": "var(--green-wa)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-default": "var(--border-default)",
        "border-hover": "var(--border-hover)",
        "border-active": "var(--border-active)",
      },
      boxShadow: {
        "glow-purple": "var(--glow-purple)",
        "glow-purple-lg": "var(--glow-purple-lg)",
        "glow-blue": "var(--glow-blue)",
        "glow-green": "var(--glow-green)",
      },
    },
  },
  plugins: [],
};
export default config;
