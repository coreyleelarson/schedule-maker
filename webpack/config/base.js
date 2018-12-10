import path from 'path';

export default {
  mode: 'development',
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      path.resolve(process.cwd(), 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};