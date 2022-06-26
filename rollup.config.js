import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/my-element.js',
  output: {
    file: `distro/lixnotification.js`,
    format: 'iife',
    name: 'LixNotification',
    sourcemap: true,
  },
  plugins: [nodeResolve()],
};
