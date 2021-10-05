/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'
import ticket_schema from '../models/tickets.model'

const Ticket = new ZuriDatabase('ct_tickets');

const ticketController = {
	create: async (req, res, next) => {
		try {
			const { title, description, commit_url, test_url, created_at } = req.body;
			const { org_id, user_id } = req.query;

			const tickets = await ticket_schema.validateAsync({
				title,
				description,
				commit_url,
				test_url,
				owner_id: user_id,
				total_upvotes: 0,
				total_downvotes: 0,
				created_at

			})
			const saveTicket = await Ticket.create(tickets, org_id )
			return Response.send(
				res,
				201,
				saveTicket,
				'Ticket created successfully'
			)
		} catch (error) {
			return next(error)
		}
	},

	//get a single ticket
	fetchOne: async (req, res, next) => {
		const { id } = req.body;
		const { org_id } = req.query;

		try {
			const data = await Ticket.fetchOne(id, org_id)
			return Response.send(
				res,
				200,
				data,
				'Ticket retrived successfully'
			)
		} catch (err) {
			return next(err)
		}
	},

	fetchAll: async (req, res, next) => {
		try {
			const { org_id } = req.query
			let data = await Ticket.fetchAll(org_id)

			return Response.send(
				res,
				200,
				data,
				'Tickets retrieved successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	fetchOne: async (req, res, next) => {
		try {
			const { org_id } = req.query;
			const { ticket_id } = req.query;
			const data = await Ticket.fetchOne({ ticket: ticket_id }, org_id)

			return Response.send(
				res,
				200,
				data,
				'Ticket retrived successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	doUpvote: async (req, res, next) => {
		try {
			// get id and payload from the frontend, id is the id of the current ticket, the payload will be an object containing the  vote weight user that's voting + the current value of the ticket's upvotes of the  like: payload:{total_upvotes: voter.voter_weight + ticket.total_upvotes}
			const { id, payload } = req.body;
			// get org id from the query
			const { org_id } = req.query;
			// update ticket
			const data = await Ticket.update(id, payload, org_id);
			// return data
			return Response.send(res, 200, data, "Upvote successful");
		} catch (err) {
			return next(err);
		}
	},
	doDownvote: async (req, res, next) => {
		// get id and payload from the frontend, id is the id of the current ticket, the payload will be an object containing the  vote weight of user that's voting + the current value of the ticket's downvotes like: payload:{total_downvotes: voter.voter_weight + ticket.total_downvotes}
		const { id, payload } = req.body;
		// get org id from the query
		const { org_id } = req.query;

		try {
			// update ticket
			const data = await Ticket.update(id, payload, org_id);
			// return data
			return Response.send(res, 200, data, "Downvote successful");
		} catch (err) {
			return next(err);
		}
	},
	updateStatus: async (req, res, next) => {
		// get id and payload from the frontend, id is the id of the current ticket, the payload will be like: payload:{status: the selected status: Requested or Ongoing or Archived}
		const { id, payload } = req.body;
		// get org id from the query
		const { org_id } = req.query;
		try {
			// update ticket
			const data = await Ticket.update(id, payload, org_id);
			// return data
			return Response.send(res, 200, data, "Ticket archived  successfully");
		} catch (err) {
			return next(err);
		}
	},
	updateTestUrl: async (req, res, next) => {
		// get id and payload from the frontend, id is the id of the current ticket, the payload will be like: payload:{test_url: the new input url}
		const { id, payload } = req.body;
		// get org id from the query
		const { org_id } = req.query;
		try {
			// update ticket
			const data = await Ticket.update(id, payload, org_id);
			// return data
			return Response.send(
				res,
				200,
				data,
				"Ticket test url updated  successfully"
			);
		} catch (err) {
			return next(err);
		}
	},
}

export default ticketController;
