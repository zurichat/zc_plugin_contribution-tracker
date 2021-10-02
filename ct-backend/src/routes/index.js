import express from "express";
import pluginInfoController from "../controllers/info.controller";
import ticketController from "../controllers/ticket.controller";
const indexRouter = express.Router();

indexRouter.get("/", pluginInfoController.getPluginInfo);

indexRouter.put("/tickets/status", ticketController.updateStatus);

indexRouter.put("/tickets/upvote", ticketController.doUpvote);

indexRouter.put("/tickets/downvote", ticketController.doDownvote);

export default indexRouter;
