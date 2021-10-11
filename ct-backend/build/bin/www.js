#!/usr/bin/env node

/**
 * Module dependencies.
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _debug = _interopRequireDefault(require("debug"));

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("../app"));

var _index = _interopRequireDefault(require("../config/enviroment/index"));

/* eslint-disable */
var getBaseUrl = _index["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    api_url = _getBaseUrl.api_url;
/**
 * Normalize a port into a number, string, or false.
 */


var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
/**
 * Get port from environment and store in Express.
 */


var port = normalizePort(_index["default"].PORT);

_app["default"].set('port', port);
/**
 * Create HTTP server.
 */


var server = _http["default"].createServer(_app["default"]);
/**
 * Event listener for HTTP server "error" event.
 */


var onError = function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port); // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      console.log("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.log("".concat(bind, " is already in use"));
      process.exit(1);
      break;

    default:
      throw error;
  }
};
/**
 * Event listener for HTTP server "listening" event.
 */


var onListening = function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(addr.port);
  (0, _debug["default"])("Listening on ".concat(bind));
  console.log("Server up and running at ".concat(addr.port));
};
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);