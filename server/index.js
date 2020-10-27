const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Bundler = require('parcel-bundler');

const { buildStart, buildEnd } = require('./utils');

const app = express();

if (!process.env.PORT) {
  process.env.PORT = 5000;
}

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// parcel-bundler
const entryFiles = path.join(__dirname, '../client/*.html');
const options = { watch: true };
const bundler = new Bundler(entryFiles, options);

// mounts the router
const route = require('./routes/resources');
app.use('/resources', route);

// bundler middleware, mount last
app.use(bundler.middleware());

// bundler events
bundler.on('buildStart', (entryPoints) => buildStart(entryPoints));
bundler.on('buildEnd', () => buildEnd());

app.listen(process.env.PORT);
