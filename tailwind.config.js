/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-orange": "#C29F1D",
				"primary-orangeTrans": "rgba(194, 159, 45,0.85)",
				"hero-cover": "rgba(255,255,255,0.58)",
				"page-cover": "rgba(0,0,0,0.68)",
			},
			backgroundImage: {
				"image-1": "url('/img/image-1.webp')",
				"image-2": "url('/img/image-3.webp')",
				"image-3": "url('/img/image-2.webp')",
				"image-whoweare": "url('/img/whoweare.webp')",
				"image-advocacy": "url('/img/advocacy.webp')",
				"image-training": "url('/img/training.webp')",
				"image-service": "url('/img/service.webp')",
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
	},
	plugins: [require("flowbite/plugin")],
};
