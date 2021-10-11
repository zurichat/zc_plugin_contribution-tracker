"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _comment = _interopRequireDefault(require("../controllers/comment.controller"));

var commentRouter = _express["default"].Router();

commentRouter.get('/:id/downvote', _comment["default"].downvoteAComment);
commentRouter.get('/:id/upvote', _comment["default"].upvoteAComment);
commentRouter.get('/:id', _comment["default"].findById);
commentRouter.get('/', _comment["default"].findAll);
commentRouter.post('/', _comment["default"].create);
var _default = commentRouter;
exports["default"] = _default;