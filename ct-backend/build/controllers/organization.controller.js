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

var _organization = _interopRequireDefault(require("../zuricore/organization"));

var _db = _interopRequireDefault(require("../zuricore/db"));

// Custom Modules
var Organization = new _organization["default"]();
var Voter = new _db["default"]("ct_voters");
var OrganizationController = {
  getMembers: function getMembers(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var org_id, members;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              org_id = req.params.org_id;
              _context.next = 4;
              return Organization.getAllMembers(org_id);

            case 4:
              members = _context.sent;
              return _context.abrupt("return", _response["default"].send(res, 200, members, "Organizatin members retrieved successfully"));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  },
  getMember: function getMember(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _req$params, org_id, member_id, bearerHeader, bearer, bearerToken, member, user_name, voters;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$params = req.params, org_id = _req$params.org_id, member_id = _req$params.member_id;
              bearerHeader = req.headers['authorization'];
              bearer = bearerHeader.split(' ');
              bearerToken = bearer[1];
              _context2.next = 7;
              return Organization.getMember(org_id, member_id, bearerToken);

            case 7:
              member = _context2.sent;

              if (!member) {
                _context2.next = 22;
                break;
              }

              user_name = member.user_name;
              _context2.next = 12;
              return Voter.findAll(org_id);

            case 12:
              voters = _context2.sent;
              _context2.t0 = member.role;
              _context2.next = _context2.t0 === "owner" ? 16 : _context2.t0 === "admin" ? 18 : 20;
              break;

            case 16:
              member.ct_admin = true;
              return _context2.abrupt("break", 21);

            case 18:
              member.ct_admin = true;
              return _context2.abrupt("break", 21);

            case 20:
              member.ct_admin = false;

            case 21:
              voters.forEach(function (voter) {
                if (voter.user_name == user_name) {
                  return member.isVoter = true;
                } else {
                  return member.ct_voter = false;
                }
              });

            case 22:
              return _context2.abrupt("return", _response["default"].send(res, 200, member, "Member retrieved successfully"));

            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2["catch"](0);
              next(_context2.t1);

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 25]]);
    }))();
  }
};
var _default = OrganizationController;
exports["default"] = _default;