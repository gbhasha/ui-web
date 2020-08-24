const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
      ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebPackPlugin({
          template: "index.html",
          filename: "./index.html"
        })
      ],
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };