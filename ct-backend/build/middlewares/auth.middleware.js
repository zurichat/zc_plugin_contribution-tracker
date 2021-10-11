"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = userAuth;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = require("axios");

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var _enviroment = _interopRequireDefault(require("../config/enviroment"));

var getBaseUrl = _enviroment["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    user_url = _getBaseUrl.user_url; // GET req to zc_core to validate and fetch user details with the provided token


function userAuth(_x, _x2, _x3) {
  return _userAuth.apply(this, arguments);
} // to be attached to all endpoints later on


function _userAuth() {
  _userAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$query, org, userId, token, response, Organizations;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, org = _req$query.org, userId = _req$query.userId;
            token = req.query.token.split(" ")[1];
            _context.next = 5;
            return (0, _axios.get)("".concat(user_url).concat(userId), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 5:
            response = _context.sent;
            // destrucures registered organisation of the user from the response
            Organizations = response.data.data.Organizations; // confirm if user belongs to an organizations from the response, the validator returns true

            if (!(Organizations.indexOf(org) > -1)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", next());

          case 9:
            throw new _customError["default"]("Can't verify user from db: ", 403);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            throw new _customError["default"]("Can't verify user from db: ".concat(_context.t0), 502);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _userAuth.apply(this, arguments);
}