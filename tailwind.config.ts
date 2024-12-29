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
        background: "#1E1E2F", // Dark gray for background
        accent: "#FF5722", // Bright red for highlights/icons
        secondaryAccent: "#FF7043", // Muted orange-red for secondary highlights
        textPrimary: "#FFFFFF", // White for main text
        textSecondary: "#B0BEC5", // Light gray for muted text
        cardBackground: "#292D3E", // Darker gray for cards
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
