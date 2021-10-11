"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _feature = _interopRequireDefault(require("../controllers/feature.controller"));

var featureRouter = _express["default"].Router(); //get all tickets, create ticket


featureRouter.route('/').get(_feature["default"].findAll).post(_feature["default"].create); //get a single ticket

featureRouter.get('/:ticket_id', _feature["default"].findByParameter);
var _default = featureRouter;
exports["default"] = _default;