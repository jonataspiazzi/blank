const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const config = {
    //entry: ['babel-polyfill'],
    devtool: 'source-map',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          pathRewrite: {'^/api' : ''}
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test:/\.scss$/,
          use:['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new Dotenv({
        path: './.env'
      })
    ]
  };

  if (argv.mode == "development") {
    config.plugins = [
      ...config.plugins,
      new HtmlWebPackPlugin({
        template: 'index.html'
      })
    ];
  }

  return config;
};
