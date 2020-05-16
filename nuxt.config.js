const isDevelopment = process.env.NODE_ENV === 'development';

export default {
	mode: 'spa',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
		noscript: [
			{
				innerHTML: 'This website requires JavaScript.',
				body: true,
			},
		],
	},
	manifest: {
		name: 'Nuxt.js Boilerplate',
		short_name: 'Nuxt.js Boilerplate',
	},
	loading: {
		color: '#fff',
		height: '3px',
		continuous: true,
	},
	generate: {
		fallback: true,
	},
	css: [
		'~/assets/styles/reset.scss',
	],
	plugins: [
		{ src: '~/plugins/lazysizes.js', ssr: false },
	],
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/dotenv',
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@aceforth/nuxt-optimized-images',
	],
	axios: {
	},
	dotenv: {
	},
	optimizedImages: {
		inlineImageLimit: -1,
		handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
		optimizeImages: true,
		optimizeImagesInDev: false,
		defaultImageLoader: 'img-loader',
		optipng: false,
		mozjpeg: {
			quality: 85,
		},
		pngquant: {
			speed: 7,
			quality: [0.65, 0.8],
		},
		webp: {
			quality: 85,
		},
	},
	build: {
		extractCSS: isDevelopment,
		optimizeCSS: isDevelopment,
		postcss: {
			plugins: {
				rfs: true,
				autoprefixer: {
					grid: true,
				},
			},
		},
		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src'];
				vue.transformAssetUrls.source = ['data-srcset', 'srcset'];

				if (isDev) {
					config.module.rules.push({
						enforce: 'pre',
						test: /\.(js|vue)$/,
						loader: 'eslint-loader',
						exclude: /(node_modules)/,
						options: {
							fix: true,
						},
					});
				}
			}
		},
	},
	styleResources: {
		scss: ['~assets/variables/*.scss'],
	},
};
