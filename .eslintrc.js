const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'eslint:recommended',
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'plugin:vue/recommended',
		'plugin:vue-a11y/recommended',
	],
	plugins: [
		'vue',
		'vue-a11y',
	],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'indent': ['error', 'tab'],
		'no-console': isProduction ? 'error' : 'off',
		'no-debugger': isProduction ? 'error' : 'off',
		'no-tabs': 'off',
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'space-before-function-paren': 'off',
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false,
			},
		}],
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
		}],
	},
	overrides: [
		{
			'files': ['*.vue'],
			'rules': {
				'indent': 'off',
			},
		},
	],
}
