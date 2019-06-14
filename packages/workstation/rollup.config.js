import typescript from "rollup-plugin-typescript";
import htmlTemplate from "rollup-plugin-generate-html-template";
import sass from "rollup-plugin-sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

export default {
	entry: "./src/index.tsx",
	dest: "./dist/bundle.js",
	format: "iife",
	plugins: [
		typescript(),
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
