import resolve, {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';
import globals from 'rollup-plugin-node-globals';
import postCSS from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';


const packageJson = require('./package.json');

export default [
    {
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
        plugins: [
            peerDepsExternal(),
            del({targets: ['dist/*']}),
            resolve({
                browser: true, // Resolve browser-compatible modules
                preferBuiltins: true
            }),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            postCSS({
                modules: true,
                extensions: ['.css'],
                use: ['sass'],
                inject: true,
                minimize: true,
                plugins: [require('autoprefixer')],
            }),
            terser(),
            builtins(),
            json(),
            globals(),
            nodeResolve(),

        ],
        external: ['react', 'react-dom']
    }
];
