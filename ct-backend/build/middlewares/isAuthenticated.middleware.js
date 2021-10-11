"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var _enviroment = _interopRequireDefault(require("../config/enviroment"));

var _db = _interopRequireDefault(require("../zuricore/db"));

var _organization = _interopRequireDefault(require("../zuricore/organization"));

var getBaseUrl = _enviroment["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    base_url = _getBaseUrl.base_url;

var Organization = new _organization["default"]();
var Voter = new _db["default"]("ct_voters");
var getUserUrl = "".concat(base_url, "/auth/verify-token");

var isAuthenticated = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authorization, _authorization$split, _authorization$split2, _, token, response, member_id, org_id, member, savedVoters;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authorization = req.headers.authorization;

            if (authorization) {
              _context.next = 4;
              break;
            }

            throw new _customError["default"]("No Authorization or session expired.", 401);

          case 4:
            _authorization$split = authorization.split(' '), _authorization$split2 = (0, _slicedToArray2["default"])(_authorization$split, 2), _ = _authorization$split2[0], token = _authorization$split2[1];

            if (token) {
              _context.next = 7;
              break;
            }

            throw new _customError["default"]("No Authorization or session expired.", 401);

          case 7:
            _context.next = 9;
            return _axios["default"].get("".concat(getUserUrl), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 9:
            response = _context.sent;
            member_id = response.data.data.user.id;
            org_id = req.query.org_id;
            _context.next = 14;
            return Organization.getMember(org_id, member_id, token);

          case 14:
            member = _context.sent;
            _context.next = 17;
            return Voter.fetchAll(org_id);

          case 17:
            savedVoters = _context.sent;
            member.ct_admin = member.role === "owner" || member.role === "admin";
            member.ct_voter = savedVoters.find(function (voter) {
              return voter.user_name == member.user_name;
            }) || false;
            console.log({
              member: member
            });
            req.user = member;
            return _context.abrupt("return", next());

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            if (!_context.t0.name) _context.t0.statusCode = 401; // Sets all defined errors to 401

            return _context.abrupt("return", next(_context.t0));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function isAuthenticated(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = isAuthenticated;
exports["default"] = _default;