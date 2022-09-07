import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: { default: true },
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$utils: 'src/utils'
		}
	}
};

export default config;
