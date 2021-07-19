module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        fall: "#F89268",
        winter: "#B4CDEB",
        spring: "#97DC9A",
        summer: "#F3F7A5",
        "fall-highlight": "#FDDA4F",
        "winter-highlight": "#EDEBEC",
        "spring-highlight": "#E9B3F7",
        "summer-highlight": "#ED8901",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
