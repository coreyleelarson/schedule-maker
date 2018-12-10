import path from 'path';
import ServerPlugin from 'server-webpack-plugin';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import baseConfig from './base';

export default merge(baseConfig, {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src/server/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'build'),
  },
  plugins: [
    new ServerPlugin({ logLevel: 'silent' }),
  ],
});