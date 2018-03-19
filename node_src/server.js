// Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Configuration
const app = express();
const port = process.env.PORT || 3333;
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

// Routes
const angular = require('./routes/angular');
const api = require('./routes/api');

// Connect to database via mongoose
// Connect to database via mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const dbOptions = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  promiseLibrary: require('bluebird')
};
mongoose.connect('mongodb://' + config.database.host + ':' + config.database.port + '/' + config.database.db, dbOptions)
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

// View engine
app.set('view engine', 'html');
app.set('views', 'dist');

// ******************************************
// MIDDLEWARE
// ******************************************
// Morgan
app.use(logger('dev'));

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ******************************************
// ROUTES
// ******************************************
// Route for Angular
app.use('/', angular);

// Route for APIs go here
app.use('/api', api);

// ******************************************
// API ERROR HANDLER
// ******************************************
// Error handler for 404 - Page Not Found
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  res.status(404).json({
    status: 404,
    message: err.message,
    name: err.name
  });
});

// Error handler for all other errors
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({
    status: 500,
    message: err.message,
    name: err.name
  });
});

// ******************************************
// SERVER START
// ******************************************
app.listen(port, () => console.log(`Server started on port ${port}`));
