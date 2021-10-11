"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _response = _interopRequireDefault(require("../utils/response"));

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var _enviroment = _interopRequireDefault(require("../config/enviroment"));

// Custom Modules
var getBaseUrl = _enviroment["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    plugin_id = _getBaseUrl.plugin_id;

var pluginInfoController = {
  getPluginInfo: function () {
    var _getPluginInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              result = {
                plugin_id: plugin_id,
                name: "Contribution Tracker",
                description: "A plugin that allows you track peoples contribution to open source projects, and highlight most pressing issues.",
                category: "Productivity",
                icon_url: "https://www.svgrepo.com/show/291854/add.svg",
                scaffold_structure: "Single SPA",
                version: "v1.0",
                developer_name: "CT-Team@HNGi8",
                developer_email: "hello@zuri.com",
                sidebar_url: "https://ct.zuri.chat/api/v1/sidebar",
                ping_url: "https://ct.zuri.chat/api/v1/ping",
                homepage_url: "https://ct.zuri.chat/",
                install_url: "https://ct.zuri.chat/"
              };
              return _context.abrupt("return", _response["default"].send(res, 200, result, "Plugin Information Retrieved"));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              throw new _customError["default"]("Could not fetch plugin information: ".concat(_context.t0), "500");

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    function getPluginInfo(_x, _x2) {
      return _getPluginInfo.apply(this, arguments);
    }

    return getPluginInfo;
  }()
};
var _default = pluginInfoController;
exports["default"] = _default;