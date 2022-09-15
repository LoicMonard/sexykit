import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			assets: 'build',
		}),
		paths: {
			base: dev ? '' : '/sexykit',
		},
		appDir: dev ? 'src' : 'internal',
    prerender: { entries: [] },
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$utils: 'src/utils'
		}
	}
};

export default config;
