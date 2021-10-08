import express from 'express';
import ticketController from '../controllers/ticket.controller'
import { userOrg } from '../middlewares/check_org.middleware'
const ticketRouter = express.Router();

//create ticket, get all tickets, update ticket
ticketRouter.route('/')
  .post(userOrg, ticketController.create)
  .get(userOrg, ticketController.findAll)
  .put(userOrg, ticketController.update)

// get a ticket by id
ticketRouter.get('/:ticket_id', userOrg, ticketController.findById)

// get a ticket by parameter
ticketRouter.get('/:org_id/:status', ticketController.findByParameter)

export default ticketRouter
