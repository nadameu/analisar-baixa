const pkg = require('./package.json');

import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import userscript from 'userscript-meta';
import metadata from './metadata';

export default {
	input: 'src/index.ts',
	output: {
		banner: process.env.BUILD === 'development' ? generateBanner() : null,
		file: `dist/${pkg.name}.user.js`,
		format: 'es',
	},
	plugins: [
		resolve(),
		typescript(),
		process.env.BUILD === 'development'
			? serve({
					open: true,
					openPage: `/${pkg.name}.user.js`,
					contentBase: 'dist',
			  })
			: null,
		process.env.BUILD === 'development'
			? null
			: terser({
					ecma: 8,
					compress: {
						passes: 3,
						unsafe_arrows: true,
					},
					output: {
						preamble: generateBanner(),
					},
					toplevel: true,
			  }),
	],
};

function generateBanner() {
	const { name, version, description, author } = pkg;
	const data = {
		name,
		version,
		...(description ? { description } : {}),
		author,
		...metadata,
	};
	return userscript.stringify(data);
}
