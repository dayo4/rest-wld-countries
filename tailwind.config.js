/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                lightGray: "#FAFAFA", // Background for light mode
                lightText: "#111517", // Text color in light mode
                darkBlue: "#2B3945", // Elements in dark mode
                veryDarkBlue: "#202C37", // Background in dark mode
                white: "#FFFFFF", // Default white
            },
        },
    },
    plugins: [],
};
