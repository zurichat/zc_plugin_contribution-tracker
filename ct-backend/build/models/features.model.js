"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

// Package Modules
// Feature Schema
var feature_schema = _joi["default"].object({
  // Feature Owner
  ownerId: _joi["default"].string().trim().label('ownerId'),
  // Feature title
  featureTitle: _joi["default"].string().trim().required().label('featureTitle'),
  //allocated time for voting
  allocatedTime: _joi["default"].number()["default"](0).required().label('allocatedTime'),
  //time created
  created_at: _joi["default"].date()["default"](Date.now).label('created_at'),
  updated_at: _joi["default"].date().allow(null).label('updated_at')
});

var _default = feature_schema;
exports["default"] = _default;