"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

/**
 * Response Wrapper class.
 *
 * @export
 * @class Response
 */
var Response = /*#__PURE__*/function () {
  function Response() {
    (0, _classCallCheck2["default"])(this, Response);
  }

  (0, _createClass2["default"])(Response, null, [{
    key: "send",
    value:
    /**
     * construct the response object and send the response
     *
     * @static
     * @param {Object} res The response object
     * @param {number} [code=STATUS.OK] The HTTP status code
     * @param {Object | null} [data={}] The actual data to send.
     * @param {string|Array} [message=] A descriptive message to send with the response.
     * @param {string} [status=OK] Set to OK for success response and ERROR for error responses
     * @memberOf Response
     * @returns {Object} response returned to client
     */
    function send(res) {
      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _httpStatusCodes["default"].OK;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var message = arguments.length > 3 ? arguments[3] : undefined;
      var success = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      res.status(code).json({
        success: success,
        message: formatMesaage(message),
        data: data
      });
    }
  }]);
  return Response;
}();

exports["default"] = Response;

function formatMesaage(str) {
  if (!str) return ""; // Make first letter capitial

  return str.charAt(0).toUpperCase() + str.slice(1);
} // Export Module


module.exports = Response;