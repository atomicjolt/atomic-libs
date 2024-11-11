import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/client/init.ts', 'src/client/launch.ts'],
  outdir: 'libs',
  bundle: true,
  assetNames: '[name]-[hash].digested',
  logLevel: 'info',
  publicPath: 'assets',
  sourcemap: 'external',
  minify: true,
  loader: {
    '.js': 'jsx'
  }
});
