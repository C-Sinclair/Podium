module.exports = {
	root: true,

	extends: ['airbnb-base', 'prettier'],

	plugins: ['prettier'],

	globals: {
		document: true,
		HTMLElement: true,
		SVGElement: true,
		Comment: true,
		DocumentFragment: true,
		Node: true
	},

	rules: {
		semi: [2, 'never'],
		'arrow-parens': [2, 'always'],
		'operator-linebreak': 'off',
		indent: ['error', 4, { VariableDeclarator: 'first' }],
		'class-methods-use-this': 0,
		'prettier/prettier': ['error']
	}
}
