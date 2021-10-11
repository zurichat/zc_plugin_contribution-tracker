"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _enviroment = _interopRequireDefault(require("../config/enviroment"));

var getBaseUrl = _enviroment["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    plugin_id = _getBaseUrl.plugin_id;

var sidebarController = {
  getSideBarInfo: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, user_id, org_id, payload;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, user_id = _req$query.user_id, org_id = _req$query.org_id;
              payload = {
                name: "Contribution Tracker",
                description: "Track people's contributions to open source projects on Zuri Chat",
                plugin_id: plugin_id,
                organisation_id: org_id,
                user_id: user_id,
                group_name: "",
                show_group: true,
                public_rooms: [{
                  room_name: "Contribution Room",
                  room_image: "https://www.svgrepo.com/show/12072/image.svg",
                  room_url: "/".concat(user_id, "/").concat(org_id)
                }]
              }; // Just return the payload

              return _context.abrupt("return", res.status(200).json(payload));

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw new _customError["default"]("Could not fetch sidebar information: ".concat(_context.t0), "500");

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }())
};
var _default = sidebarController;
exports["default"] = _default;