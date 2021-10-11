"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

// Package Modules
// Ticket Schema
var ticket_schema = _joi["default"].object({
  // ticket title
  title: _joi["default"].string().trim().required().label('title'),
  // Ticket Owner
  owner_id: _joi["default"].string().trim().required().label('owner_id'),
  //ticket description
  description: _joi["default"].string().trim().required().label('description'),
  //commit url
  commit_url: _joi["default"].string().trim().uri().label('commit_url'),
  //test url
  test_url: _joi["default"].string().trim().uri().label('test_url'),
  status: _joi["default"].string().trim()["default"]('ongoing').valid('ongoing', 'archived').label('status'),
  // requested/created = 0,  completed = 1, archived = 2
  //vote count
  total_upvotes: _joi["default"].number()["default"](0).label('total_upvotes'),
  total_downvotes: _joi["default"].number()["default"](0).label('total_downvotes'),
  //time created
  created_at: _joi["default"].date()["default"](Date.now).label('created_at'),
  updated_at: _joi["default"].date().allow(null).label('updated_at')
});

var _default = ticket_schema;
exports["default"] = _default;