import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
const packageJson = require('./package.json');
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import resolve, {nodeResolve} from "@rollup/plugin-node-resolve";

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
    plugins: [
        del({ targets: ['dist/*'] }),
        nodeResolve(),
        commonjs(),
        resolve({
            browser: true, // Resolve browser-compatible modules
            preferBuiltins: true,
        }),

        typescript({
            typescript: require('typescript'),
        }),
        postCSS({
            plugins: [require('autoprefixer')],
        }),
        filesize(),
        json(),
    ],
};
