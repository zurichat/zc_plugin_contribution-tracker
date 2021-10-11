"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _admin = _interopRequireDefault(require("../controllers/admin.controller"));

var _auth = require("../middlewares/auth.middleware");

var _check_org = require("../middlewares/check_org.middleware");

var adminRouter = require("express").Router();

// retrieve voters, add voter, update voter, remove voter
adminRouter.route("/voters", _check_org.userOrg).get(_admin["default"].getVoters).post(_admin["default"].addVoter).patch(_admin["default"].updateVoter)["delete"](_admin["default"].removeVoter); //get single voter

adminRouter.get('/voter', _check_org.userOrg, _admin["default"].getVoter); // Export module

var _default = adminRouter;
exports["default"] = _default;