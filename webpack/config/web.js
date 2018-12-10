import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './base';

export default merge(baseConfig, {
  entry: {
    web: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(process.cwd(), 'build/web'),
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true }},
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(process.cwd(), 'src'),
                path.resolve(process.cwd(), 'node_modules'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'public/index.html'),
    }),
  ],
});