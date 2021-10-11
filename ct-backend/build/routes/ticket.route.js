"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ticket = _interopRequireDefault(require("../controllers/ticket.controller"));

var _check_org = require("../middlewares/check_org.middleware");

var ticketRouter = _express["default"].Router(); //create ticket, get all tickets, update ticket


ticketRouter.route('/').post(_check_org.userOrg, _ticket["default"].create).get(_check_org.userOrg, _ticket["default"].findAll).put(_check_org.userOrg, _ticket["default"].update); // get a ticket by id

ticketRouter.get('/:ticket_id', _check_org.userOrg, _ticket["default"].findById); // get a ticket by parameter

ticketRouter.get('/:org_id/:status', _ticket["default"].findByParameter);
var _default = ticketRouter;
exports["default"] = _default;