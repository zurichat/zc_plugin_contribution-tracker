"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _organization = _interopRequireDefault(require("../controllers/organization.controller"));

var _auth = require("../middlewares/auth.middleware");

var _check_org = require("../middlewares/check_org.middleware");

var organizationRouter = require("express").Router();

// retrieve org members from zuri core
organizationRouter.get("/:org_id/members", _organization["default"].getMembers); // retrieve a org members from zuri core

organizationRouter.get("/:org_id/members/:member_id", _organization["default"].getMember); // Export module

var _default = organizationRouter;
exports["default"] = _default;