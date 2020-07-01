import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoPreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const production = process.env.MIX_ENV == "prod";

export default {
  input: 'js/main.js',
  output: {
    sourcemap: production,
    format: 'iife',
    name: 'app',
    file: '../priv/static/js/app.js'
  },
  plugins: [
    postcss(),
    svelte({
      preprocess: autoPreprocess(),
      dev: !production,
      css: css => {
        css.write('../priv/static/css/app.css');
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}