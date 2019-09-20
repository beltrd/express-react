# Express & React Template
This repo is a template for future projects that will use express and react.

## How to create from scratch
1. Initialize npm
```
npm init -y
```
2. install express and react

```
npm install --save express react react-dom
```
3. Extra dependencies
```
npm install --save-dev babel babel-core babel-loader 
babel-preset-es2015 babel-preset-react css-loader
node-sass sass-loader style-loader webpack webpack-cli 
mocha chai enzyme
```
4. add scripts to `package.json`
```
"scripts": {
  "start": "nodemon src/server/index.js",
  "webpack": "./node_modules/.bin/webpack -w",
  "test": "mocha --compilers babel-core/register ./test/*test.js"
}
```
5. install nodemon
```
npm install -g nodemon
```
### This is the folder structure
```
/root    (name of directory)
  /src
    /client
      /components
        App.jsx
      /scss
        application.scss
      index.js
    /server
      index.js
  index.html
  package-lock.json
  package.json
  webpack.config.js
```
### What's in the Folders and Files?
* `webpack.config.js` this will build into `root`/build/bundle.js
```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // Transpiles JSX and ES6
         }
       }]
     }
    ],

  }
};

module.exports = config;
```
* `/src/server/index.js` this has express
```
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname +'./../../')); //serves the index.html

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
```
* `index.html`
```
<html>
<head>
  <meta charset="UTF-8">
  <title>Express & React Template</title>
</head>
<body>
  <h1>Express & React Template</h1>
  <div id="root"></div>
  <script src="build/bundle.js"></script>
</body>
</html>
```
* `/src/client/index.js`
```
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';

import styles from './scss/application.scss';

render(<App />,document.getElementById('root'));
```
* `client/components/App.js`
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
```
* `client/scss/application.scss`
```
body {
  background: #f8f8f8;
  color: #4d4d4d;
  text-align: center;
}
```
* Run this two commands and you will have a working project
```
npm run webpack

npm start
```