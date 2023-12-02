/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#572C57",
                linesColor: "#7C7C8A",
                moneyColor: "#108810",
            }
        },
    },
    plugins: [],
}