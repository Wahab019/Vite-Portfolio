/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "container-small": "540px",
        "container-medium": "720px",
        "container-big": "960px",
        "container-large": "1140px",
        "container-xtralarge": "1320px",
      },
      backgroundImage: {
        "home-pattern": "url('/src/assets/img/homeSec1img1.jpg')",
        "contact-pattern": "url('/src/assets/img/contactSec1img1.jpg')",
        "subscibe-pattern": "url('/src/assets/img/contactSec3img1.jpg')",
      },
      screens: {
        mobile: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        tablet: { min: "768px", max: "991px" },
        // => @media (min-width: 768px and max-width: 991px) { ... }
        pc: { min: "992px", max: "1199px" },
        // => @media (min-width: 992px and max-width: 1199px) { ... }
        desktop: { min: "1200px" },
        // => @media (min-width: 1200px) { ... }
      },
      fontFamily: {
        garamond: ["EB Garamond"],
      },
    },
  },
  plugins: [],
};
