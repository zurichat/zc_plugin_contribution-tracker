import express from 'express';
const PluginInformationController = require("../controllers/plugin-info.controller");
const indexRouter = express.Router();

indexRouter.get('/', PluginInformationController.getPluginInfo );

export default indexRouter;