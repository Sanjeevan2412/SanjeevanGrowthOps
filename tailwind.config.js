/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "xs": [
        "0.67rem",
        {
          fontWeight: "500",
        },
      ],
      "sm": [
        "0.75rem",
        {
          fontWeight: "500",
        },
      ],
      "base": [
        "0.75rem",
        {
          fontWeight: "700",
        },
      ],
      "lg": [
        "1.25rem",
        {
          fontWeight: "700",
        },
      ],
      "xl": [
        "2rem",
        {
          fontWeight: "700",
        },
      ],
      "2xl": [
        "3rem",
        {
          fontWeight: "700",
        },
      ],
    },
  },
};
