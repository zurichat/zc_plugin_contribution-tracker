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

var _comment = _interopRequireDefault(require("../models/comment.model"));

var _customError = _interopRequireDefault(require("../utils/custom-error"));

/* eslint-disable */
var Comment = new _db["default"]('ct_comments');
var Voter = new _db["default"]("ct_voters");
var commentController = {
  create: function () {
    var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var _req$body, comment, feature_id, owner, org_id, commentData, dbResponse;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              //   comment,
              //   feature_id,
              //   owner: { name, user_id, image_url },
              //   created_at,
              //   updated_at,
              //   up_votes: [{ user_name, voting_weight }],
              //   down_votes: [{ user_name, voting_weight }],
              _req$body = req.body, comment = _req$body.comment, feature_id = _req$body.feature_id, owner = _req$body.owner;
              org_id = req.query.org_id; // const owner = {
              //   user_id: req.user.id,
              //   user_name: req.user.display_name,
              //   image_url: req.user.image_url
              // };

              _context.next = 5;
              return _comment["default"].validateAsync({
                comment: comment,
                feature_id: feature_id,
                owner: owner,
                up_votes: [],
                down_votes: []
              });

            case 5:
              commentData = _context.sent;
              _context.next = 8;
              return Comment.create(commentData, org_id);

            case 8:
              dbResponse = _context.sent;
              return _context.abrupt("return", _response["default"].send(res, 201, dbResponse, 'Comment created successfully'));

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

    function create(_x, _x2, _x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  findById: function () {
    var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var id, org_id, data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              org_id = req.query.org_id;
              _context2.prev = 2;
              _context2.next = 5;
              return Comment.findById(id, org_id);

            case 5:
              data = _context2.sent;
              return _context2.abrupt("return", _response["default"].send(res, 200, data, 'Comment retrived successfully'));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              return _context2.abrupt("return", next(_context2.t0));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));

    function findById(_x4, _x5, _x6) {
      return _findById.apply(this, arguments);
    }

    return findById;
  }(),
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var org_id, data;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              org_id = req.query.org_id;
              _context3.next = 4;
              return Comment.findAll(org_id);

            case 4:
              data = _context3.sent;
              return _context3.abrupt("return", _response["default"].send(res, 200, data, 'Comments retrieved successfully', true));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(_context3.t0));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    function findAll(_x7, _x8, _x9) {
      return _findAll.apply(this, arguments);
    }

    return findAll;
  }(),
  upvoteAComment: function () {
    var _upvoteAComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var id, _req$query, org_id, voter_id, voterResponse, voter, commentResponse, savedComment, dbResponse;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _req$query = req.query, org_id = _req$query.org_id, voter_id = _req$query.voter_id; //   comment,
              //   feature_id,
              //   owner: { name, user_id, image_url },
              //   created_at,
              //   updated_at,
              //   up_votes: [{ user_name, voting_weight }],
              //   down_votes: [{ user_name, voting_weight }],
              // validate the voter
              // if (!req.user.ct_voter) throw new CustomError('This is not a valid voter', 401); 

              _context4.next = 5;
              return Voter.findByParameter(voter_id, org_id);

            case 5:
              voterResponse = _context4.sent;
              voter = voterResponse.data;

              if (voter) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt("return", _response["default"].send(res, 422, {}, "Invalid voter_id passed. Pass a valid voter_id as a query params.", false));

            case 9:
              _context4.next = 11;
              return Comment.findById(id, org_id);

            case 11:
              commentResponse = _context4.sent;
              savedComment = commentResponse.data;

              if (savedComment) {
                _context4.next = 15;
                break;
              }

              throw new _customError["default"]('Comment not found.', 404);

            case 15:
              // add only if the user has voted before
              if (!savedComment.up_votes.some(function (vote) {
                return vote.user_name == voter.user_name;
              })) {
                savedComment.updated_at = Date.now();
                savedComment.up_votes.push({
                  user_name: voter.user_name,
                  voting_weight: voter.voting_weight
                });
              } // Save the comment payload


              delete savedComment._id; // remove the _id field. It throws error on zuri core api

              _context4.next = 19;
              return Comment.update(id, savedComment, org_id);

            case 19:
              dbResponse = _context4.sent;
              return _context4.abrupt("return", _response["default"].send(res, 200, dbResponse, "Voted successfully"));

            case 23:
              _context4.prev = 23;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", next(_context4.t0));

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 23]]);
    }));

    function upvoteAComment(_x10, _x11, _x12) {
      return _upvoteAComment.apply(this, arguments);
    }

    return upvoteAComment;
  }(),
  downvoteAComment: function () {
    var _downvoteAComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
      var id, _req$query2, org_id, voter_id, voterResponse, voter, commentResponse, savedComment, dbResponse;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              _req$query2 = req.query, org_id = _req$query2.org_id, voter_id = _req$query2.voter_id; //   comment,
              //   feature_id,
              //   owner: { name, user_id, image_url },
              //   created_at,
              //   updated_at,
              //   up_votes: [{ user_name, voting_weight }],
              //   down_votes: [{ user_name, voting_weight }],
              // validate the voter
              // if (!req.user.ct_voter) throw new CustomError('This is not a valid voter', 401); 

              _context5.next = 5;
              return Voter.findById(voter_id, org_id);

            case 5:
              voterResponse = _context5.sent;
              voter = voterResponse.data;

              if (voter) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", _response["default"].send(res, 422, {}, "Invalid voter_id passed. Pass a valid voter_id as a query params.", false));

            case 9:
              _context5.next = 11;
              return Comment.findById(id, org_id);

            case 11:
              commentResponse = _context5.sent;
              savedComment = commentResponse.data;

              if (savedComment) {
                _context5.next = 15;
                break;
              }

              throw new _customError["default"]('Comment not found.', 404);

            case 15:
              // add only if the user has voted before
              if (!savedComment.down_votes.some(function (vote) {
                return vote.user_name == voter.user_name;
              })) {
                savedComment.updated_at = Date.now();
                savedComment.down_votes.push({
                  user_name: voter.user_name,
                  voting_weight: voter.voting_weight
                });
              } // Save the comment payload


              delete savedComment._id; // remove the _id field. It throws error on zuri core api

              _context5.next = 19;
              return Comment.update(id, savedComment, org_id);

            case 19:
              dbResponse = _context5.sent;
              return _context5.abrupt("return", _response["default"].send(res, 200, dbResponse, "Voted successfully"));

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", next(_context5.t0));

            case 26:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 23]]);
    }));

    function downvoteAComment(_x13, _x14, _x15) {
      return _downvoteAComment.apply(this, arguments);
    }

    return downvoteAComment;
  }()
};
var _default = commentController;
exports["default"] = _default;