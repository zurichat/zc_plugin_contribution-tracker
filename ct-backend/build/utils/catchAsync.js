"use strict";

var catchAsync = function catchAsync(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next))["catch"](function (err) {
      return next(err);
    });
  };
};

module.exports = catchAsync;