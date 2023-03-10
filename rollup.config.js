import typescript from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  plugins: [typescript(), terser()],
  output: [
    {
      file: './lib/pagination.esm.js',
      format: 'esm',
      exports: 'auto',
    },
    {
      file: './lib/pagination.js',
      format: 'cjs',
      exports: 'auto',
    },
  ],
};
