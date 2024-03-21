import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	server: {
		port: 80,
		fs: {
			allow: ["/cache/node_modules/"]
		}
	},
	plugins: [sveltekit(), purgeCss({
		safelist: {
			// any selectors that begin with "hljs-" will not be purged
			greedy: [/^hljs-/],
		},
	}),
	],
	resolve: {
		alias: {
			$fonts: resolve('/fonts')
		}
	}
});