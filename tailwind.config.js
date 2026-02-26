/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        university: {
          primary: "#1e3a8a", 
          secondary: "#2563eb",
          accent: "#f59e0b",
          danger: "#dc2626",
          light: "#f8fafc",
          card: "#ffffff",
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
