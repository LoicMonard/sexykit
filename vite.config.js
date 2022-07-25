import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// allow locale files to be loaded
	server: {
		fs: {
			allow: ['..']
		}
	}

};

export default config;
