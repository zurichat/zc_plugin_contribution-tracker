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

var _tickets = _interopRequireDefault(require("../models/tickets.model"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

/* eslint-disable */
var Ticket = new _db["default"]('ct_tickets');
var ticketController = {
  create: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var _req$body, title, description, commit_url, test_url, created_at, _req$query, org_id, user_id, tickets, saveTicket;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, title = _req$body.title, description = _req$body.description, commit_url = _req$body.commit_url, test_url = _req$body.test_url, created_at = _req$body.created_at;
              _req$query = req.query, org_id = _req$query.org_id, user_id = _req$query.user_id;
              _context.next = 5;
              return _tickets["default"].validateAsync({
                title: title,
                description: description,
                commit_url: commit_url,
                test_url: test_url,
                owner_id: user_id,
                total_upvotes: 0,
                total_downvotes: 0,
                created_at: created_at
              });

            case 5:
              tickets = _context.sent;
              _context.next = 8;
              return Ticket.create(tickets, org_id);

            case 8:
              saveTicket = _context.sent;
              return _context.abrupt("return", _response["default"].send(res, 201, saveTicket, 'Ticket created successfully'));

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
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()),
  findAll: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var org_id, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              org_id = req.query.org_id;
              _context2.next = 4;
              return Ticket.findAll(org_id);

            case 4:
              data = _context2.sent;

              if (data) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", _response["default"].send(res, 404, null, 'Tickets not found', false));

            case 7:
              return _context2.abrupt("return", _response["default"].send(res, 200, data, 'Tickets retrieved successfully', true));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(_context2.t0));

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
  // get a single ticket
  findById: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var ticket_id, org_id, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ticket_id = req.params.ticket_id;
              org_id = req.query.org_id;
              _context3.prev = 2;
              _context3.next = 5;
              return Ticket.findById(ticket_id, org_id);

            case 5:
              data = _context3.sent;

              if (data) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", _response["default"].send(res, 404, null, 'Ticket not found', false));

            case 8:
              return _context3.abrupt("return", _response["default"].send(res, 200, data, 'Ticket retrieved successfully'));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              return _context3.abrupt("return", next(_context3.t0));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 11]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }()),
  findByParameter: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var _req$params, org_id, status, data;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$params = req.params, org_id = _req$params.org_id, status = _req$params.status;
              console.log(org_id, status);

              if (!(!status && !(status == 'ongoing' || 'archived'))) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", _response["default"].send(res, 403, null, 'status is invalid', false));

            case 5:
              if (org_id) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", _response["default"].send(res, 403, 'add org_id as param', false));

            case 7:
              _context4.next = 9;
              return Ticket.findByParameter({
                status: status
              }, org_id);

            case 9:
              data = _context4.sent;

              if (data) {
                _context4.next = 12;
                break;
              }

              return _context4.abrupt("return", _response["default"].send(res, 404, null, 'Ticket with this status does not exist', false));

            case 12:
              return _context4.abrupt("return", _response["default"].send(res, 200, data, 'successfully retrieved by status', true));

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", next(_context4.t0));

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }()),
  update: (0, _catchAsync["default"])( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
      var payload, _req$query2, org_id, ticket_id, data;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              payload = req.body.payload;
              _req$query2 = req.query, org_id = _req$query2.org_id, ticket_id = _req$query2.ticket_id; // update ticket

              _context5.next = 5;
              return Ticket.update(ticket_id, payload, org_id);

            case 5:
              data = _context5.sent;

              if (data) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt("return", _response["default"].send(res, 404, data, 'Failed to update ticket', false));

            case 8:
              return _context5.abrupt("return", _response["default"].send(res, 200, data, "Update successful"));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              _context5.t0.message;

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 11]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }())
};
var _default = ticketController;
exports["default"] = _default;