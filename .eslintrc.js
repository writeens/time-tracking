module.exports = {
	'env': {
		'es6': true,
		'react-native/react-native': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-native'
	],
	'rules': {
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react-native/no-inline-styles': 2,
		'react-native/no-color-literals': 2,
		'react-native/no-raw-text': 2,
		'react-native/no-single-element-style-arrays': 2,
	}
};
