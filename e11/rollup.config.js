import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: 'dist/pt1.js',
  sourceMap: false,
  moduleName: 'pt1',
  plugins: [
    babel({exclude: '[node_modules/**, lib/**]', "presets": ["es2015-rollup"]}),
    uglify(),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false
    })
  ]
}
