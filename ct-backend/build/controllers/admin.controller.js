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

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _voter = _interopRequireDefault(require("../models/voter.model"));

var _db = _interopRequireDefault(require("../zuricore/db"));

// Custom Modules
var Voter = new _db["default"]("ct_voters");
var AdminController = {
  addVoter: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var _req$body, first_name, last_name, email, user_name, voting_weight, org_id, voter, newVoterDBData;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, user_name = _req$body.user_name, voting_weight = _req$body.voting_weight;
              org_id = req.query.org_id;
              _context.next = 5;
              return _voter["default"].validateAsync({
                first_name: first_name,
                last_name: last_name,
                email: email,
                user_name: user_name,
                voting_weight: voting_weight
              })["catch"](function (e) {
                return _response["default"].send(res, 422, e, "validation failed");
              });

            case 5:
              voter = _context.sent;
              _context.next = 8;
              return Voter.create(voter, org_id);

            case 8:
              newVoterDBData = _context.sent;
              return _context.abrupt("return", _response["default"].send(res, 200, newVoterDBData, "Voter added successfully"));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()),
  updateVoter: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var voting_weight, _req$query, org_id, voter_id, voter, newVoterDBData;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              voting_weight = req.body.voting_weight;
              _req$query = req.query, org_id = _req$query.org_id, voter_id = _req$query.voter_id;
              voter = {
                voting_weight: voting_weight,
                updated_at: Date.now()
              }; // Save the voter to the database

              _context2.next = 6;
              return Voter.update(voter_id, voter, org_id);

            case 6:
              newVoterDBData = _context2.sent;
              return _context2.abrupt("return", _response["default"].send(res, 201, newVoterDBData, "Voter updated successfully"));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }()),
  getVoters: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var org_id, voters;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              org_id = req.query.org_id;
              _context3.next = 4;
              return Voter.findAll(org_id);

            case 4:
              voters = _context3.sent;

              if (voters) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", _response["default"].send(res, 404, voters, 'voters not found', false));

            case 7:
              return _context3.abrupt("return", _response["default"].send(res, 200, voters, "Voters retrieved successfully"));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);

              _response["default"].send(res, 422, _context3.t0, _context3.t0.message);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }()),
  //get a single voter
  getVoter: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var _req$query2, email, org_id, voter;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$query2 = req.query, email = _req$query2.email, org_id = _req$query2.org_id;
              _context4.next = 4;
              return Voter.findByParameter({
                email: email
              }, org_id);

            case 4:
              voter = _context4.sent;

              if (voter) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", _response["default"].send(res, 404, voter, 'voter not found', false));

            case 7:
              return _context4.abrupt("return", _response["default"].send(res, 200, voter, "Voter retrieved succcessfully"));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              next(_context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }()),
  //remove a voter
  removeVoter: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
      var _req$query3, org_id, email, response;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$query3 = req.query, org_id = _req$query3.org_id, email = _req$query3.email;
              _context5.next = 4;
              return Voter["delete"]({
                email: email
              }, org_id);

            case 4:
              response = _context5.sent;
              return _context5.abrupt("return", _response["default"].send(res, 200, response, "Voter deleted successfully"));

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              next(_context5.t0);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }())
};
var _default = AdminController;
exports["default"] = _default;