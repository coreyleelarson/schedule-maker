import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import webpack from 'webpack';
import serverConfig from './config/server';
import webConfig from './config/web';

const isServer = process.argv.includes('server');
const isWeb = process.argv.includes('web');
const isWatch = process.argv.includes('watch');

const config = [
  ...(isServer ? [serverConfig] : []),
  ...(isWeb ? [webConfig] : []),
];

(function() {
  if (!config.length) {
    console.log('No webpack configs found.');
    return;
  }

  const compiler = webpack(config);
  new FriendlyErrorsPlugin().apply(compiler);

  isWatch
    ? compiler.watch({}, () => {})
    : compiler.run(() => {});
})();