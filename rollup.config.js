
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2'
import path from 'path';


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  output: [{
    file: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
    name: 'main'
  },
  { file: 'public/bundle.es5.mjs', format: 'es', sourcemap: true }
  // ,{ file: 'public/bundle.umd.mjs', name: 'main', format: 'umd', sourcemap: true }

  ],

  plugins: [
    resolve() // tells Rollup how to find date-fns in node_modules
    ,commonjs() // converts date-fns to ES modules
    ,production && terser() // minify, but only in production
    ,typescript()
  ]
};
