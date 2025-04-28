/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				400: "35rem",
			},
			fontSize: {
				12: "11px",
				10: "10px",
			},
		},
	},
	plugins: [],
};
