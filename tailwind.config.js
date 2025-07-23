/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        body: "14px",
      },
      colors: {
        primary: {
          green: "hsl(163, 72%, 41%)",
          red: "hsl(356, 69%, 56%)",
        },
        social: {
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youtube: "hsl(348, 97%, 39%)",
          instagram: {
            from: "hsl(37, 97%, 70%)",
            via: "hsl(5, 77%, 71%)",
            to: "hsl(329, 70%, 58%)",
          },
        },
        theme: {
          dark: {
            bg: "hsl(230, 17%, 14%)",
            topBg: "hsl(232, 19%, 15%)",
            cardBg: "hsl(228, 28%, 20%)",
            textLight: "hsl(230, 22%, 74%)",
            textWhite: "hsl(0, 100%, 100%)",
            toggleGradientFrom: "hsl(210, 79%, 56%)",
            toggleGradientTo: "hsl(146, 68%, 55%)",
            cardHover: "#333A56",
          },
          light: {
            bg: "hsl(0, 100%, 100%)",
            topBg: "hsl(225, 100%, 98%)",
            cardBg: "hsl(227, 47%, 96%)",
            textDark: "hsl(230, 17%, 14%)",
            textMuted: "hsl(228, 12%, 44%)",
            toggle: "hsl(230, 22%, 74%)",
            cardHover: "#E1E3F0",
          },
        },
      },
    },
  },
  plugins: [],
};
