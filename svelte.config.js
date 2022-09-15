import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
    prerender: { entries: [] },
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$utils: 'src/utils'
		}
	}
};

export default config;
