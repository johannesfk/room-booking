import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$routes: resolve('./src/routes')
				}
			}
		},
		files: {
			assets: 'static',
			lib: 'src/lib',
			serviceWorker: 'src/service-worker.ts',
			template: 'src/app.html'
		}
	}
};

export default config;
