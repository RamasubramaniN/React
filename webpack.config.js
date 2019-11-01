var webpack = require('webpack');

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
            use: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader']
         },
         {
            test: /\.(png|jpg|gif)$/, loader: 'file-loader'
         }
      ]
   }
}
module.exports = config;


