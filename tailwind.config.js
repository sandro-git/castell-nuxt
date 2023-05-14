/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "linear-gradient(to right bottom, rgba(226, 232, 240, 0.7), rgba(226, 232, 240, 0)),url('/public/front.jpg')",
            }
        },
    },
    plugins: [],
}

