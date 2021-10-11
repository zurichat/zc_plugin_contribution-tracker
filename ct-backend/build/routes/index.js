"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _info = _interopRequireDefault(require("../controllers/info.controller"));

var _sidebar = _interopRequireDefault(require("../controllers/sidebar.controller"));

var indexRouter = _express["default"].Router();

indexRouter.get('/ping', function (req, res) {
  return res.json({
    message: 'Hello! You have found the zc_plugin_contribution_tracker api'
  });
});
indexRouter.get("/", _info["default"].getPluginInfo);
indexRouter.get("/sidebar", _sidebar["default"].getSideBarInfo);
var _default = indexRouter;
exports["default"] = _default;