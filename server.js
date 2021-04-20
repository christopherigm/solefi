import fs from 'fs';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import compress from 'compression';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import fileStreamRotator from 'file-stream-rotator';

const server = express();
const filename = './version.js';
if ( !fs.existsSync(filename) ) {
  fs.writeFileSync(filename,
    'module.exports = "0.0.0";', {mode: (0o777 & ~process.umask()).toString(8)}
  );
}
const dist_version = require(filename);

if ( !fs.existsSync('static') ) {
  fs.mkdirSync('static');
}

let config = require('./src/config/qa.json');
if ( process.env.NODE_ENV ) {
  config = require(`./src/config/${process.env.NODE_ENV.trim()}.json`);
}

if ( config.env.production ) {
  if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
  }
  const accessLogStream = fileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: './logs/access-%DATE%.log',
    frecuency: 'daily',
    verbose: true
  });
  server.use(morgan('common', {
    stream: accessLogStream
  }));
  server.use(compress());
} else {
  server.use(morgan('dev'));
}

server.use(cookieParser());
server.use( bodyParser.json() );
server.use(bodyParser.urlencoded({ extended: true }));
server.use(function(err, req, res, next) {
  res.status(400).send({
    success: false,
    message: 'Invalid JSON',
    err: err
  });
});

server.use(function( req, res, next ) {
  const year = new Date().getFullYear();
  req.context = {};
  req.context.config = config;
  req.context.config.year = year;
  req.context.config.dist_version = dist_version;
  return next();
});

let viewsDir = [];
let partialsDir = [];
let isDirectory;

const pathPages = `${__dirname}/src/pages`;
const pages = fs.readdirSync(pathPages);
for (let i = 0; i < pages.length; i++) {
  let itemDir = `${pathPages}/${pages[i]}`;
  isDirectory = fs.lstatSync(itemDir).isDirectory();
  if ( !isDirectory ) {
    continue;
  }
  itemDir += '/src';
  if ( fs.existsSync(`${itemDir}/app`) ) {
    let appFiles = fs.readdirSync(`${itemDir}/app`);
    for (let j = 0; j < appFiles.length; j++) {
      const isRoute = appFiles[j].search(/route/g);
      if ( isRoute > -1 ) {
        const route = require(`${itemDir}/app/${appFiles[j]}`);
        route.default(server);
      }
    }
  }
  if ( fs.existsSync(`${itemDir}/assets`) ) {
    server.use( `/static/${pages[i]}`,
      express.static(`${itemDir}/assets`, { maxage: '30d' }));
  }
  if ( fs.existsSync(`${itemDir}/views`) ) {
    viewsDir.push(`${itemDir}/views`);
    if ( fs.existsSync(`${itemDir}/views/partials`) ) {
      partialsDir.push(`${itemDir}/views/partials`);
    }
  }
}

const pathModules = `${__dirname}/src/modules`;
const modules = fs.readdirSync(pathModules);
for (let i = 0; i < modules.length; i++) {
  let itemDir = `${pathModules}/${modules[i]}`;
  isDirectory = fs.lstatSync(itemDir).isDirectory();
  if ( !isDirectory ) {
    continue;
  }
  itemDir += '/src';
  if ( fs.existsSync(`${itemDir}/assets`) ) {
    server.use( `/static/${modules[i]}`,
      express.static(`${itemDir}/assets`, { maxage: '30d' }));
  }
  if ( fs.existsSync(`${itemDir}/views`) ) {
    partialsDir.push(`${itemDir}/views`);
  }
}

server.use( '/static', express.static(`${__dirname}/static`));
server.engine('hbs', hbs.express4({
  partialsDir: partialsDir
}));
server.set( 'views', viewsDir );
server.set( 'view engine', 'hbs' );

// Helpers
hbs.registerHelper('naturalIndex', function(index) {
  return index + 1;
});
hbs.registerHelper('equal', function(a, b, options) {
  if (arguments.length < 3) {
    throw new Error('Handlebars Helper equal needs 2 parameters');
  }
  if ( a !== b ) {
    return options.inverse(this);
  }
  return options.fn(this);
});

server.listen(config.env.port);
console.log(`Server running at http://127.0.0.1:${config.env.port}/`);

export default server;
