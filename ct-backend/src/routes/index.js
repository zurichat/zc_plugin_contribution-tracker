import express from 'express'
import pluginInfoController from '../controllers/info.controller'

const indexRouter = express.Router();

indexRouter.get('/', pluginInfoController.getPluginInfo);

export default indexRouter;