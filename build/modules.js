/**
 * 各模块规范
 * @Author: Junting
 * @Date: 2022-10-11 14:18:22
 * @Last Modified by: Junting
 * @Last Modified time: 2022-10-14 12:41:58
 */

import paths from "./paths";
import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonJS from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const extensions = ['.ts'];

/**
 * ESM
 */
export function esm ({ input }) {
  return {
    input,
    output: {
      format: "esm",
      dir: paths.appBuild + "/esm",
      // 只编译不打包
      preserveModules: true,
      entryFileNames: "[name].js"
    },
    plugins: [
      esbuild({
        target: "ES2020"
      }),
      nodeResolve({ extensions }),
      json()
    ]
  }
}

/**
 * UMD
 */
export function umd({ input, jsName }) {
  return {
    input,
    output: {
      format: 'umd',
      sourcemap: true,
      dir: paths.appBuild + "/umd",
      entryFileNames: "[name].js",
      name: jsName
    },
    plugins: [
      esbuild({
        target: 'es2015'
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        extensions
      }),
      nodeResolve({ extensions }),
      commonJS(),
      json()
    ],
  }
}
