/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#002619",
        inversePrimary: "#FAFAFA",
        inverseSecondary: "#F0F1F5",
        brandLight: "#00E599",
        brandRegular: "#00452E",
      },

      borderRadius: {
        "4xl": "48px",
      },

      margin: {
        "m-18": "72px",
        "mt-18": "72px",
        "mr-18": "72px",
        "mb-18": "72px",
        "ml-18": "72px",
        "mx-18": "72px",
        "my-18": "72px",
      },
    },
  },
  plugins: [],
};
