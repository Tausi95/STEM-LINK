/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF", // Blue-700
          text: "#FFFFFF", // White text
          hover: "#1E3A8A", // Darker blue
        },
        secondary: {
          DEFAULT: "#64748B", // Gray-500
          text: "#FFFFFF",
          hover: "#475569",
        },
        danger: {
          DEFAULT: "#DC2626", // Red-600
          text: "#FFFFFF",
          hover: "#B91C1C",
        },
        success: {
          DEFAULT: "#16A34A", // Green-600
          text: "#FFFFFF",
          hover: "#15803D",
        },
        warning: {
          DEFAULT: "#F59E0B", // Yellow-500
          text: "#FFFFFF",
          hover: "#D97706",
        },
        info: {
          DEFAULT: "#0284C7", // Sky-600
          text: "#FFFFFF",
          hover: "#0369A1",
        },
        dark: {
          DEFAULT: "#1E293B", // Gray-900
          text: "#FFFFFF",
          hover: "#0F172A",
        },
        light: {
          DEFAULT: "#F3F4F6", // Gray-100
          text: "#111827", // Dark text
          hover: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
