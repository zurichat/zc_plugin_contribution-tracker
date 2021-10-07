import express from 'express';
import ticketController from '../controllers/ticket.controller'
const ticketRouter = express.Router();

//create ticket. requires orgId and userId from req.query
ticketRouter.post('/', ticketController.create)
//get all tickets
ticketRouter.get('/', ticketController.findAll)
// get a single ticket
ticketRouter.get('/:ticket_id', ticketController.findById)
// update ticket
ticketRouter.put("/", ticketController.update)

export default ticketRouter;
