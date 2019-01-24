var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var EncodingPlugin = require('webpack-encoding-plugin');

var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         { 
            test: /\.css$/, 
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader']
         },
         {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
         },
         {
            test: /\.(png|jpg|gif)$/, loader: 'file-loader'
         }
      ]
   },
   plugins: [ 
    new MiniCssExtractPlugin({filename: 'common.css'}),
    new EncodingPlugin({encoding: 'iso-8859-1'})
  ]
}
module.exports = config;


