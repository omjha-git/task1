import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atlas: {
          ink: "#12100f",
          muted: "#6f6863",
          line: "#eee2da",
          soft: "#fff8f4",
          orange: "#ff5a1f",
          coral: "#ff7a3d",
          amber: "#ffb25b"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 90, 31, 0.18)",
        card: "0 12px 32px rgba(18, 16, 15, 0.07)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,90,31,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,90,31,.08) 1px, transparent 1px)",
        radialGlow: "radial-gradient(circle at center, rgba(255,90,31,.26), transparent 55%)"
      }
    },
  },
  plugins: [],
};
export default config;
