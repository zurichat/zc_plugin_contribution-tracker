import express from 'express'
import pluginInfoController from '../controllers/info.controller'
import sidebarController from '../controllers/sidebar.controller'

const indexRouter = express.Router();

indexRouter.get('/ping', (req, res) =>
  res.json({ message: 'Hello! You have found the zc_plugin_contribution_tracker api' })
)

indexRouter.get("/", pluginInfoController.getPluginInfo)

indexRouter.get("/sidebar", sidebarController.getSideBarInfo)

export default indexRouter;
