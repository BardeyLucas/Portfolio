/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      // A changer
      "colors": {
        "Water": "#00176a",
        "Decoration": "#00092a",
        "Night sky": "#000f46",
        "Waves": "#adbfff",
        "Blue sky": "#0066ff",
        "Pink sky": "#ff00b8",
        "Orange sky": "#ffa800",
        "White": "#f4f7ff"
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "4.375rem"
      },
      "fontFamily": {
        "nunito-sans": "Nunito Sans",
        "oooh-baby": "Oooh Baby",//sera surrement supprimé
        "michroma": 'Michroma',
        "scope-one": "Scope One"//sera surrement supprimé
      },
    }
  },
  plugins: []
}
