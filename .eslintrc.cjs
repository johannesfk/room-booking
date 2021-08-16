/*
const eslintSveltePreprocess = require("eslint-svelte3-preprocess");
const path = require("path");
const svelteConfigPath = path.resolve("./svelte.config");

module.exports = {
	root: true,
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// createDefaultProgram: true,
		ecmaVersion: 2019,
		sourceType: "module",
	},
	extends: ["eslint:recommended"],
	plugins: ["svelte3", "@typescript-eslint", "prettier"],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
		},
		{
			files: ["*.ts", "*.json"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:prettier/recommended",
			],
		},
	],
	settings: {
		"svelte3/preprocess": eslintSveltePreprocess(svelteConfigPath),
		//"svelte3/preprocess": eslintSveltePreprocess(),
	},
};
*/

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
