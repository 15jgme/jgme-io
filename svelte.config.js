import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import pack from 'vite-imagetools';
// const { imagetools } = pack;
import {imagetools} from 'vite-imagetools';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({out: 'node_build'})
	},
	vite: {
		resolve: {
			alias: {
				$static: path.resolve('src/static')
			}
		},
		plugins: [imagetools()]
	}
};

export default config;
