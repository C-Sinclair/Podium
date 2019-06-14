import typescript from "rollup-plugin-typescript2"
import babel from 'rollup-plugin-babel'
import htmlTemplate from "rollup-plugin-generate-html-template"
import sass from "rollup-plugin-sass"
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default {
	input: "./src/index.tsx",
	output: {
		file: "./dist/bundle.js",
		format: "cjs",
	},
	plugins: [
		babel({
			extensions: [
				...DEFAULT_EXTENSIONS,
				'ts',
				'tsx'
			]
		}),
		typescript({
			clean: true,
			objectHashIgnoreUnknownHack: true
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
