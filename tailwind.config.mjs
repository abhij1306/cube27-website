/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        bg: {
          body: "var(--bg-body)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)"
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)"
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          hot: "var(--accent-hot)"
        }
      },
      borderRadius: {
        "glass-sm": "10px",
        "glass-md": "18px",
        "glass-lg": "28px",
        "glass-xl": "32px"
      },
      boxShadow: {
        soft: "0 25px 70px rgba(0,0,0,0.06)",
        "soft-dark": "0 25px 70px rgba(0,0,0,0.8)"
      }
    }
  },
  plugins: []
};
