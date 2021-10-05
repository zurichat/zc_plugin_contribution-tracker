import express from 'express';
import ticketController from '../controllers/ticket.controller'
const ticketRouter = express.Router();

//get all tickets
ticketRouter.get('/', ticketController.fetchAll)
//get a single ticket
// ticketRouter.get('/:ticket_id', ticketController.fetchOne)
//create ticket
ticketRouter.post('/', ticketController.create)
// update ticket
ticketRouter.put("/", ticketController.updateTicket)

export default ticketRouter;
