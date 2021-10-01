const indexRouter = require("express").Router();
const InfoCtrl = require("../controllers/info.controller");
const { userAuth } = require("../middlewares/auth.middleware");

//info endpoints
indexRouter.get("/info", InfoCtrl.getPluginInfo );

//side-bar endpoints
indexRouter.get("/sidebar", InfoCtrl.getSideBarInfo);


// Export module
module.exports = indexRouter;