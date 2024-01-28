/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-orange": "#FA702F",
				"back-cover": "rgba(255,255,255,0.72)",
			},
			backgroundImage: {
				"testimony-pattern": "url('/img/wave.svg')",
			},
			fontFamily: {
				hanuman: ["Hanuman", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
				"8xl": "5.52rem",
			},
			content: [
				"./index.html",
				"./src/**/*.{js,ts,jsx,tsx}",
				"node_modules/flowbite-react/lib/esm/**/*.js",
			],
			screens: {
				xs: "480px",
				sm: "768px",
				md: "1060px",
			},
		},
		plugins: [require("flowbite/plugin")],
	},
};
