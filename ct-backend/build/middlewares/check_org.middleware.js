"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userOrg = userOrg;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function userOrg(_x, _x2, _x3) {
  return _userOrg.apply(this, arguments);
}

function _userOrg() {
  _userOrg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var org_id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            org_id = req.query.org_id; // confirm org_id is provided as query param

            if (!org_id) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", next());

          case 4:
            res.status(403).json({
              status: 'error',
              message: "Please add  org_id as query param"
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(502).json({
              status: 'error',
              message: _context.t0
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _userOrg.apply(this, arguments);
}