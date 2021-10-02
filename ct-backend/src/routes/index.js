import express from "express";
import pluginInfoController from "../controllers/info.controller";
import ticketController from "../controllers/ticket.controller";
const indexRouter = express.Router();

indexRouter.get("/", pluginInfoController.getPluginInfo);
// update status
indexRouter.put("/tickets/status", ticketController.updateStatus);
// upvote
indexRouter.put("/tickets/upvote", ticketController.doUpvote);
//downvote
indexRouter.put("/tickets/downvote", ticketController.doDownvote);
// update test url
indexRouter.put("/tickets/downvote", ticketController.doDownvote);

export default indexRouter;
