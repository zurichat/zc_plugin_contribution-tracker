import express from "express";
import ticketController from "../controllers/ticket.controller";
const ticketRouter = express.Router();

//get all tickets
ticketRouter.get("/", ticketController.fetchAll);
//get a single ticket
ticketRouter.get("/:ticket_id", ticketController.fetchOne);
//create ticket
ticketRouter.post("/", ticketController.addTicket);

// update ticket
ticketRouter.put("/update", ticketController.updateTicket);
// CAREFUL! this will delete all the tickets in the collection
// ticketRouter.delete("/delete", ticketController.deleteOne);

export default ticketRouter;
