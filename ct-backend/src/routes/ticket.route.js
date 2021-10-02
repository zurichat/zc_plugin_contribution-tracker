import express from 'express';
import ticketController from '../controllers/ticket.controller'
const ticketRouter = express.Router();

//get all tickets
ticketRouter.get('/', ticketController.fetchAll)
//get a single ticket
ticketRouter.get('/:ticket_id', ticketController.fetchOne)
//create ticket
ticketRouter.post('/', ticketController.create)
// update status
ticketRouter.put("/status", ticketController.updateStatus)
// upvote
ticketRouter.put("/upvote", ticketController.doUpvote)
//downvote
ticketRouter.put("/downvote", ticketController.doDownvote)
// update test url
ticketRouter.put("/downvote", ticketController.updateTestUrl)

export default ticketRouter;
