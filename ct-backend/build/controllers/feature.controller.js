"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = _interopRequireDefault(require("../zuricore/db"));

var _response = _interopRequireDefault(require("../utils/response"));

var _features = _interopRequireDefault(require("../models/features.model"));

/* eslint-disable */
var Feature = new _db["default"]('ct_feature');
var featureController = {
  create: function create(req, res, next) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _req$body, featureTitle, allocatedTime, created_at, _req$query, org_id, user_id, features, saveFeature;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, featureTitle = _req$body.featureTitle, allocatedTime = _req$body.allocatedTime, created_at = _req$body.created_at;
              _req$query = req.query, org_id = _req$query.org_id, user_id = _req$query.user_id;
              _context.next = 5;
              return _features["default"].validateAsync({
                featureTitle: featureTitle,
                allocatedTime: allocatedTime,
                ownerId: user_id,
                created_at: created_at
              });

            case 5:
              features = _context.sent;
              _context.next = 8;
              return Feature.create({
                features: features,
                org_id: org_id
              });

            case 8:
              saveFeature = _context.sent;
              return _context.abrupt("return", _response["default"].send(res, 201, saveFeature, 'Feature created successfully'));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }))();
  },
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var org_id, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              org_id = req.query.org_id;
              _context2.next = 4;
              return Feature.findAll(org_id);

            case 4:
              data = _context2.sent;
              return _context2.abrupt("return", _response["default"].send(res, 200, data, 'Features retrieved successfully', true));

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(_context2.t0));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    function findAll(_x, _x2, _x3) {
      return _findAll.apply(this, arguments);
    }

    return findAll;
  }(),
  findByParameter: function () {
    var _findByParameter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var org_id, feature_id, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              org_id = req.query.org_id;
              feature_id = req.query.feature_id;
              _context3.next = 5;
              return Feature.findByParameter({
                feature: feature_id
              }, org_id);

            case 5:
              data = _context3.sent;
              return _context3.abrupt("return", _response["default"].send(res, 200, data, 'Feature retrieved successfully', true));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(_context3.t0));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    function findByParameter(_x4, _x5, _x6) {
      return _findByParameter.apply(this, arguments);
    }

    return findByParameter;
  }()
};
var _default = featureController;
exports["default"] = _default;