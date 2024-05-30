import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

const options = {
    input: 'src/index.ts',
    output: [
        {
            file: path.resolve(__dirname, 'dist/chain.min.js'),
            format: 'umd',
            sourcemap: false,
            plugins: [terser()]
        }
    ],
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
    ],
    external: [
        /lodash/,
        'core-js',
        'tslib'
    ]
};
export default options;
