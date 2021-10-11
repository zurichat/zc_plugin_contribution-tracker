"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _enviroment = _interopRequireDefault(require("../config/enviroment"));

// Package Modules
// Custom Modules
var CustomError = require("../utils/custom-error");

var getBaseUrl = _enviroment["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    user_url = _getBaseUrl.user_url;

var ZuriOrganization = /*#__PURE__*/function () {
  function ZuriOrganization() {
    (0, _classCallCheck2["default"])(this, ZuriOrganization);
    this.BASE_API_ENDPOINT = 'https://api.zuri.chat/organizations';
  } // Get 


  (0, _createClass2["default"])(ZuriOrganization, [{
    key: "getAllMembers",
    value: function () {
      var _getAllMembers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(organization_id) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios["default"].get("".concat(this.BASE_API_ENDPOINT, "/").concat(organization_id, "/members"));

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.data.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw new CustomError("Unable to Connect to Zuri: ".concat(_context.t0), _context.t0.response.status, _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getAllMembers(_x) {
        return _getAllMembers.apply(this, arguments);
      }

      return getAllMembers;
    }() // Get 

  }, {
    key: "getMember",
    value: function () {
      var _getMember = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(organization_id, member_id, token) {
        var response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _axios["default"].get("".concat(this.BASE_API_ENDPOINT, "/").concat(organization_id, "/members/").concat(member_id), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.data.data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw new CustomError("Unable to Connect to Zuri: ".concat(_context2.t0), _context2.t0.response.status, _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getMember(_x2, _x3, _x4) {
        return _getMember.apply(this, arguments);
      }

      return getMember;
    }()
  }]);
  return ZuriOrganization;
}();

exports["default"] = ZuriOrganization;