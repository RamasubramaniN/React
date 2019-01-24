import React from 'react';

/*
http://www.react.express/npm

There are two common ways to set up a React development environment: create-react-app and webpack.

1) Web Pack : Webpack bundles your client-side code (JavaScript, css, etc) into a single JavaScript file. Webpack is the most common way to bundle a React app during development and for production. If you want more flexibility and power than create-react-app, you should learn how to use Webpack and the Babel plugin (for compiling your ES2015/JSX code for browser compatibility).

webpack.config.js
------------------
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};


page.html
-----------
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <script src="dist/bundle.js"></script>
  </body>
</html>

http://www.react.express/modern_javascript
http://www.react.express/react_api

2) Create React App : Facebook provides a command-line utility called create-react-app which automatically sets up a new React project with a sensible default project structure and feature set. create-react-app offers an eject option to export your app.

Command line commands
-----------------------
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start

http://localhost:3000/

React apps are most commonly built with Webpack and Babel, using npm as a package manager. While there are many other build tools and plugins, these 3 are the most common/essential. Even the create-react-app utility uses these behind the scenes.

npm 
-----
npm is the package manager for node.js, the server-side JavaScript execution environment. Most React apps load the React library and 3rd party libraries/extensions through npm packages.npm was originally intended for usage exclusively in node.js server-side code, it's now commonly used for client-side code too. Webpack makes this possible.

npm uses a file named package.json to record which packages your app depends on. This package.json file should live in the top level directory of your React project. To add a package.json to a project, run
		"npm init"
This will walk you through a command line prompt to add some basic details about your app. The details are optional, so feel free to just hit enter repeatedly until the prompt finishes. When you type "npm install" npm automatically downloads all dependencies into a folder called node_modules. This folder will live alongside your package.json.

Make sure you commit the package.json to git so that others will use the same packages (and versions) as you when working on the project. It's uncommon to check in node_modules, since these tend to be large and can be downloaded based on the dependencies listed in the package.json. To add a new dependency foo-bar to your package.json, run:
	"npm install --save foo-bar"
Note: If you're on npm version 5, you can leave off the --save. Prior to v5, --save was necessary to add the dependency to the package.json. Otherwise, the package would get installed, but not added as a dependency. In v5, --save is the default behavior.
Also: If you're on npm version 5, when you install dependencies, a package-lock.json file will be automatically generated. This file helps ensure reproducible builds by locking down the exact version of dependencies. This file should also be committed into git.


JSX is a superset of JS that allows you to write what looks like markup in your JavaScript code.
JSX is not runnable inside today’s browsers. It must be compiled into JavaScript that the browser understands.
JSX was never intended to be HTML. It just has the familiar look of markup for creating UIs.
In React’s case, the library uses a virtual DOM to create an in-memory representation of the DOM, 
or what the document will look like in the browser. To create these virtual DOM elements, 
react has a React.createElement function that it calls.
You can use many tools to compile your JavaScript. A popular choice is Babel. 
There is a transform in Babel, called babel-plugin-transform-react-jsx that does the JSX transform.

React.createElement('h1', null, 'Yay!') --> <h1>Yay!</h1>
React.createElement('h1', { className: 'wowzers' }, 'Yay!') --> <h1 className="wowzers">Yay!</h1>

<div>						React.createElement('div', null,
	<h1>Yay!</h1>   -->			React.createElement('h1', null, 'Yay!')
</div>  					);

How does the plugin know what to transform the JSX into? It needs a pragma, or directive on how the compiler 
should treat the file. The default pragma for this babel plugin is React.createElement, which means that 
all JSX will turn into calls to this function. (import React from 'react')
							
*/
class Example1 extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
export default Example1;
