import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/commandline.js',
  output: {
    file: 'dist/commandline.js',
    format: 'cjs',
    exports: 'auto'
  },
  external: [
    'nomnom',
    'path',
    'fs'
  ],
  plugins: [
    json(),
    babel({
      babelHelpers: 'external'
    })
  ]
};
