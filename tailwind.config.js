/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: 'url("/bg1.png")',
        bg2: 'url("/bg2.png")',
        bg3: 'url("/bg3.png")',
        bgGradient:
          "radial-gradient(166.82% 166.82% at 103.9% -10.39%, rgb(232, 77, 112) 0%, rgb(163, 55, 246) 53.088635206222534%, rgb(40, 167, 237) 100%)",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "360px",
          md: "680px",
          lg: "808px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
