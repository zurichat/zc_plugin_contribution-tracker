"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var handleErrors = function handleErrors(err, req, res, next) {
  if (err instanceof _customError["default"]) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
      trace: err.trace
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
};

var _default = handleErrors;
exports["default"] = _default;