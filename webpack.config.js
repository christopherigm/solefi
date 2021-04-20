const path = require('path');
const fs = require('fs');

let sourceMap = false;
if ( process.env.NODE_ENV ) {
  if ( process.env.NODE_ENV.trim() !== 'qa') {
    sourceMap = true;
  }
}

const filename = './version.js';
if ( !fs.existsSync(filename) ) {
  fs.writeFileSync(filename,
    'module.exports = "0.0.0";',
    {
      mode: (0o777 & ~process.umask()).toString(8)
    }
  );
}
const dist_version = require(filename);

let jsFiles = [];
let isDirectory;
const pathModules = `${__dirname}/src/modules`;
const modules = fs.readdirSync(pathModules);
for (let i = 0; i < modules.length; i++) {
  let itemDir = `${pathModules}/${modules[i]}`;
  isDirectory = fs.lstatSync(itemDir).isDirectory();
  if ( !isDirectory ) {
    continue;
  }
  itemDir += '/src';
  if ( fs.existsSync(`${itemDir}/js`) ) {
    if ( fs.existsSync(`${itemDir}/js/${modules[i]}.js`) ) {
      jsFiles.push(`${itemDir}/js/${modules[i]}.js`);
    }
    if ( fs.existsSync(`${itemDir}/js/main.js`) ) {
      jsFiles.push(`${itemDir}/js/main.js`);
    }
    if ( fs.existsSync(`${itemDir}/js/index.js`) ) {
      jsFiles.push(`${itemDir}/js/index.js`);
    }
  }
}

const pathPages = `${__dirname}/src/pages`;
const pages = fs.readdirSync(pathPages);
for (let i = 0; i < pages.length; i++) {
  let itemDir = `${pathPages}/${pages[i]}`;
  isDirectory = fs.lstatSync(itemDir).isDirectory();
  if ( !isDirectory ) {
    continue;
  }
  itemDir += '/src';
  if ( fs.existsSync(`${itemDir}/js`) ) {
    if ( fs.existsSync(`${itemDir}/js/${pages[i]}.js`) ) {
      jsFiles.push(`${itemDir}/js/${pages[i]}.js`);
    }
    if ( fs.existsSync(`${itemDir}/js/main.js`) ) {
      jsFiles.push(`${itemDir}/js/main.js`);
    }
    if ( fs.existsSync(`${itemDir}/js/index.js`) ) {
      jsFiles.push(`${itemDir}/js/index.js`);
    }
  }
}

module.exports = {
  entry: {
    main: jsFiles
  },
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: `bundle_${dist_version}.js`
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   use: {
      //     loader: 'vue-loader'
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader', options: {
              sourceMap: sourceMap
          }
        }, {
          loader: 'sass-loader', options: {
              sourceMap: sourceMap
          }
        }]
      }
    ]
  }
  // plugins: [
  //   new VueLoaderPlugin()
  // ],
  // resolve: {
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js'
  //   }
  // }
};
