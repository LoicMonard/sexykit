import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			assets: 'build',
			pages: 'build'
		}),
		paths: {
			base: '/sexykit'
		},
		appDir: dev ? 'src' : 'internal',
		alias: {
			$components: 'src/components',
			$styles: 'src/styles',
			$utils: 'src/utils'
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.startsWith('_components/_')) {
				return false;
			}
			return true;
		},
		files: () => true
	}
};

export default config;
