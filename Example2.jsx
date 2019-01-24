import React from 'react';

/*
Webpack bundles your client-side code (JavaScript, css, etc) into a single JavaScript file. Webpack is highly configurable with plugins, allowing you to bundle nearly any kind of asset imaginable.

Webpack is most commonly configured using a separate config file: webpack.config.js. This file must export a configuration object, or a function which returns a configuration object, which the webpack compiler will use when run from the command line as webpack.In Our case, 

//webpack.config.js
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
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
         },
      ]
   }
} module.exports = config;

Output file is index.js. This file gets downloaded in browser. Output port is 8080.

This is referred as package.json
"scripts": {
    "start": "webpack-dev-server --hot"
},


Essential files
----------------
We have defined input file as "main.js" & output file as "index.js" (All html/css/js gets bundled in this file)
Let's add the bare minimum files needed to see something on the screen. We'll create an main.js and an index.html:
// main.js
document.write('Hello World!')

//index.html
<script src="./bundle.js"></script>

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.

Babel is a highly configurable compiler that lets you use experimental JavaScript features and extensions, compiling down into older JavaScript versions that can be supported on a wider range of platforms. Of course, if a native platform doesn't support an ES2015 feature like Promise(), Babel won't fully be able to help -- but it can in many cases "polyfill" missing APIs to provide this functionality.

Babel enables debugging of the original source code by including source maps with the compiled JavaScript. JavaScript interpreters will run the compiled code, but map it to the source code in the debugger so that you can debug the source code instead of the (generally quite ugly) compiled output.


*/
class Example2 extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1> Header </h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				This is Content.
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div>
				<h1> Footer </h1>
			</div>
		);
	}
}

export default Example2;