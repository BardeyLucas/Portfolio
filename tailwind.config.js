/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
      "colors": {
       "Background": "#0d001c",
       "Bleu": "#00b2ff",
       "Rose": "#ff007a",
       "Orange": "#ff8d1c",
       "Violet": "#8a0c73",
       "Blanc": "#f9f5ff"      },
      "fontFamily": {
       "nunito-sans": "Nunito Sans",
       "michroma": "Michroma",
      },
      "boxShadow": {
       "Circle-shadow": "inset 0px 0px 5px 0px rgba(0,0,0,0.25)",
       "Search-shadow": "0px 0px 10px 0px rgba(0,0,0,0.5)"
      },
    extend: {
      gridTemplateColumns: {
        'principal': 'repeat(12, 1fr)',
        'pc12': 'repeat(12, 1fr)',
        'pc11': 'repeat(11, 1fr)',
        'pc10': 'repeat(10, 1fr)',
        'pc9': 'repeat(9, 1fr)',
        'pc8': 'repeat(8, 1fr)',
        'pc7': 'repeat(7, 1fr)',
        'pc6': 'repeat(6, 1fr)',
        'pc5': 'repeat(5, 1fr)',
        'pc4': 'repeat(4, 1fr)',
        'pc3': 'repeat(3, 1fr)',
        'pc2': 'repeat(2, 1fr)',
        'pc1': 'repeat(1, 1fr)',
        'telprincipal':'repeat(12, 20px)',
        'tel12': 'repeat(12, 20px)',
        'tel11': 'repeat(11, 20px)',
        'tel10': 'repeat(10, 20px)',
        'tel9': 'repeat(9, 20px)',
        'tel8': 'repeat(8, 20px)',
        'tel7': 'repeat(7, 20px)',
        'tel6': 'repeat(6, 20px)',
        'tel5': 'repeat(5, 20px)',
        'tel4': 'repeat(4, 20px)',
        'tel3': 'repeat(3, 20px)',
        'tel2': 'repeat(2, 20px)',
        'tel1': 'repeat(1, 20px)',
      },
      // "colors": {
      //   "Water": "#00176a",
      //   "Decoration": "#00092a",
      //   "Night sky": "#000f46",
      //   "Waves": "#adbfff",
      //   "Blue sky": "#0066ff",
      //   "Pink sky": "#ff00b8",
      //   "Orange sky": "#ffa800",
      //   "White": "#f4f7ff"
      // },
      // fontFamily: {
      //   "nunito-sans": "Nunito Sans",
      //   "oooh-baby": "Oooh Baby",//sera surrement supprimé
      //   "michroma": 'Michroma',
      //   "scope-one": "Scope One"//sera surrement supprimé
      // },
    }
  },
  plugins: []
}
