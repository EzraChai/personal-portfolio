/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "orange-web": "#FCA311",
            },
        },
    },
    darkMode: "class",
    plugins: [require("autoprefixer")],
};
