//Version 2
// module.exports = {
//   purge:["./index.html","./src/**/*.{jsx}"],
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/* Version Ultinma */
// module.exports = {

//   content: [

//     './index.html',"./src/**/*.{js,jsx}",

//   ],

//   theme: {

//     extend: {},

//   },

//   plugins: [],

// }
module.exports = {
  purge:["index.html", "./src/**/*.jsx"],
  darkMode:false,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}