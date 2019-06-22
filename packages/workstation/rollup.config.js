import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import htmlTemplate from "rollup-plugin-generate-html-template"
import resolve from 'rollup-plugin-node-resolve'
import sass from "rollup-plugin-sass"
import replace from 'rollup-plugin-replace'
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import { DEFAULT_EXTENSIONS } from '@babel/core'

const extensions = [
	...DEFAULT_EXTENSIONS,
	'.ts',
	'.tsx'
]

export default {
	input: "./src/index.tsx",
	output: {
		file: "./dist/bundle.js",
		format: "iife",
	},
	plugins: [
		resolve({ extensions }),
		commonjs({
			namedExports: {
				'react': [
					'useState',
					'createElement',
					'Children'
				],
				'react-dom': [
					'render',
					'findDOMNode'
				]
			}
		}),
		babel({
			extensions,
			include: ['src/**/*']
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		htmlTemplate({
			template: "src/index.html",
			target: "dist/index.html"
		}),
		sass({
			output: true,
			processor: css =>
				postcss([autoprefixer])
					.process(css)
					.then(result => result.css)
		})
	]
};