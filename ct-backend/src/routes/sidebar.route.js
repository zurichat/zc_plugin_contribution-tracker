import express from 'express'
import sidebarController from '../controllers/sidebar.controller'

const sidebarRouter = express.Router();

//fetch sidebar-info
sidebarRouter.get("/sidebar", sidebarController.getSideBarInfo)

export default sidebarRouter;
