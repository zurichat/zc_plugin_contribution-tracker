"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _admin = _interopRequireDefault(require("./routes/admin.route"));

var _errors = _interopRequireDefault(require("./middlewares/errors.middleware"));

var _ticket = _interopRequireDefault(require("./routes/ticket.route"));

var _feature = _interopRequireDefault(require("./routes/feature.route"));

var _comment = _interopRequireDefault(require("./routes/comment.route"));

var _organization = _interopRequireDefault(require("./routes/organization.route"));

var _check_org = require("./middlewares/check_org.middleware");

var _isAuthenticated = _interopRequireDefault(require("./middlewares/isAuthenticated.middleware"));

_dotenv["default"].config();

var publicPath = _path["default"].join(__dirname, '../../frontend/public');

console.log("public path :" + publicPath);
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](publicPath));
if (process.env.NODE_ENV == 'develpoment') app.use(require('morgan')('dev'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
}); // app.options('*', cors())
// app.use(
//   cors({
//     origin: '*',
//   })
// )
//serve static

app.get('/', function (req, res) {
  res.sendFile(publicPath, 'index.html');
}); //serve static

app.get('/zuri-zuri-plugin-contribution-tracker.js', function (req, res) {
  res.sendFile(publicPath, 'js/app.js');
});
app.use('/api/v1', _index["default"]);
app.use('/api/v1/admin', _admin["default"]);
app.use('/api/v1/tickets', _ticket["default"]);
app.use('/api/v1/feature', _check_org.userOrg, _feature["default"]);
app.use('/api/v1/comments', _check_org.userOrg, _comment["default"]);
app.use('/api/v1/organizations', _check_org.userOrg, _organization["default"]); // app.get('/', async (req, res, next) => {
//   let options = {
//     root: path.join(__dirname, '../../frontend/dist')
//   };
//   let fileName = 'index.html';
//   res.sendFile(fileName, options, (err) => {
//     if (err) {
//       next(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// });

app.use(_errors["default"]);
var _default = app;
exports["default"] = _default;