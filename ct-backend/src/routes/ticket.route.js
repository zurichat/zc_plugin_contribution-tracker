import express from 'express';
import ticketController from '../controllers/ticket.controller'
const ticketRouter = express.Router();

//get all tickets
ticketRouter.get('/', ticketController.fetchAll)
ticketRouter.post('/', ticketController.create)

export default ticketRouter;