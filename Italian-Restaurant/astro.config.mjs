// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://italian-restaurant-98hhcmgxa-xlugners-projects.vercel.app",
	output: "static",
	integrations: [
		alpinejs(),
		playformInline({
			Beasties: true,
		}),
		mdx(),
	],
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
