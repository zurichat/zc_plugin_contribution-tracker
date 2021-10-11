"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axios = _interopRequireDefault(require("axios"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _customError = _interopRequireDefault(require("../utils/custom-error"));

var _index = _interopRequireDefault(require("../config/enviroment/index"));

// Package Modules
// Custom Modules
var getBaseUrl = _index["default"].getBaseUrl;

var _getBaseUrl = getBaseUrl(),
    base_url = _getBaseUrl.base_url,
    read_url = _getBaseUrl.read_url,
    write_url = _getBaseUrl.write_url,
    delete_url = _getBaseUrl.delete_url,
    plugin_id = _getBaseUrl.plugin_id; // eslint-disable no-underscore-dangle
// eslint-disable class-methods-use-this

/** *
 * create
 * findAll
 * findById
 * findByParameter
 * updateById
 * delete
 */


var ZuriDb = function ZuriDb(entity) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ZuriDb);
  (0, _defineProperty2["default"])(this, "create", (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(payload, org_id) {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _axios["default"])({
                url: write_url,
                method: 'post',
                data: {
                  plugin_id: plugin_id,
                  organization_id: org_id,
                  collection_name: _this.entity,
                  bulk_write: Array.isArray(payload),
                  // returns true if data is an array
                  payload: payload
                }
              });

            case 3:
              res = _context.sent;
              return _context.abrupt("return", res.data.data);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw new _customError["default"]("Unable to Connect to Zuri Core DB [CREATE]: ".concat(_context.t0), "500");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
  (0, _defineProperty2["default"])(this, "findAll", (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(org_id) {
      var url, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "".concat(read_url, "/").concat(plugin_id, "/").concat(_this.entity, "/").concat(org_id);
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _axios["default"])({
                url: url,
                method: 'get'
              });

            case 4:
              res = _context2.sent;
              return _context2.abrupt("return", res.data.data);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              _context2.t0.response.data;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }()));
  (0, _defineProperty2["default"])(this, "findById", (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(object_id, org_id) {
      var url, res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(read_url, "/").concat(plugin_id, "/").concat(_this.entity, "/").concat(org_id, "?_id=").concat(object_id);
              _context3.prev = 1;
              _context3.next = 4;
              return (0, _axios["default"])({
                url: url,
                method: 'get'
              });

            case 4:
              res = _context3.sent;
              return _context3.abrupt("return", res.data.data ? res.data.data : null);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error('Server Internal error, we will figure it out, try again later');

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }));

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }()));
  (0, _defineProperty2["default"])(this, "findByParameter", (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(object, org_id) {
      var queryString, url, res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              queryString = new URLSearchParams(object).toString();
              url = "".concat(read_url, "/").concat(plugin_id, "/").concat(_this.entity, "/").concat(org_id, "?").concat(queryString);
              _context4.prev = 2;
              _context4.next = 5;
              return (0, _axios["default"])({
                url: url,
                method: 'get'
              });

            case 5:
              res = _context4.sent;
              return _context4.abrupt("return", res.data.data);

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              throw new _customError["default"]("Unable to Connect to Zuri Core DB [READ ONE BY PARAMETER]", "500", _context4.t0.response.data);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 9]]);
    }));

    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }()));
  (0, _defineProperty2["default"])(this, "update", (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(object_id, payload, org_id) {
      var res;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _axios["default"])({
                method: 'put',
                url: write_url,
                data: {
                  plugin_id: plugin_id,
                  organization_id: org_id,
                  collection_name: _this.entity,
                  object_id: object_id,
                  payload: payload
                }
              });

            case 3:
              res = _context5.sent;
              console.log(res);
              return _context5.abrupt("return", res.data.data);

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              throw new _customError["default"]("Unable to Connect to Zuri Core DB [UPDATE]", "500", _context5.t0);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    return function (_x8, _x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }()));
  this.entity = entity;
} // delete = catchAsync(async (filter, org_id) => {
//   try {
//     // Make the request
//     const res = await axios({
//       method: 'delete',
//       url: delete_url,
//       data: {
//         plugin_id,
//         organization_id: org_id,
//         collection_name: this.entity,
//         bulk_delete: true,
//         filter,
//       },
//     });
//     //Return the response
//     return res.data.data
//   } catch (error) {
//     throw new CustomError(
//       `Unable to Connect to Zuri Core DB [DELETE]: ${error}`,
//       "500",
//       error
//     );
//   }
// })
;

exports["default"] = ZuriDb;