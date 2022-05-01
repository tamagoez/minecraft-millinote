module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "night", "corporate", "emerald", "winter", "dracula", "cmyk", "garden", "aqua", "lofi", "pastel", "wireframe"],
  },
}
