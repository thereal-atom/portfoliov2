/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            "colors": {
                "design-two-primary": "#262322",
                "design-two-accent": "#F2E5D7",

                "design-two-purple": "#8B5CF6",
                "design-two-peach": "#FDE68A",

                "design-two-burgundy": "#241623",
                "design-two-turquoise": "#3C787E",

                "design-two-teal": "#85FFC7",
                "design-two-carbon": "#2F2D2E",

                "design-two-dark-blue": "#0D1317",

                "design-two-dark-purple": "#6564DB",

                "design-three-primary": "#0D1317"
            },
            "width": {
                "large": "1400px",
            },
            "fontSize": {
                "2xs": "0.6rem",
                "tiny": "0.5rem",
            },
            "screens": {
                "xs": "480px",
                "2xs": "360px",
            },
        },
	},
	plugins: [],
}
