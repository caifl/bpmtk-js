// import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';
import cjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';

function pgl() {
  return [
    nodeResolve({
      browser: true
    }),
    cjs(),
    vue(),
    json(),
    // uglify()
  ];
}

export default [
  {
    input: './src/modeler.vue',
    output: {
      name: 'BpmtkModeler',
      file: `dist/bpmtk-modeler.umd.js`,
      format: 'umd'
    },
    plugins: pgl()
  },
  {
    input: './src/modeler.vue',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: pgl()
  }
];