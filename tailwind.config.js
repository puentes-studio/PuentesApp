/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  fontFamily: {
    heptaSlab: ['"Hepta Slab"', "serif"],
    poppins: ['"Poppins"', "sans-serif"],
    abrilFatface: ['"Abril Fatface"', "serif"],
    chonburi: ['"Chonburi"', "serif"],
    oswald: ['"Oswald"', "sans-serif"],
    bigShouldersDisplay: ['"Big Shoulders Display"', "sans-serif"],
  },
  fontWeight: {
    // Poppins
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  theme: {
    extend: {
      rotate: {
        10: "10deg",
      },
    },
  },
  plugins: [],
};
