/* eslint-disable */
import ZuriDb from '../zuricore/db';
import Response from '../utils/response'
import ticket_schema from '../models/tickets.model'
import catchAsync from '../utils/catchAsync'

const Ticket = new ZuriDb('ct_tickets');

const ticketController = {
	create: catchAsync(async (req, res, next) => {
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
				pos_votes: 0,
				neg_votes: 0,
				created_at

			})
			const saveTicket = await Ticket.create(tickets, org_id)
			return Response.send(
				res,
				201,
				saveTicket,
				'Ticket created successfully'
			)
		} catch (error) {
			return next(error)
		}
	}),

	findAll: catchAsync(async (req, res, next) => {
		try {
			const { org_id } = req.query
			let data = await Ticket.findAll(org_id)
			if (!data) {
				return Response.send(res, 404, null, 'Tickets not found', false)
			}
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
	}),

	// get a single ticket
	findById: catchAsync(async (req, res, next) => {
		const { ticket_id } = req.params;
		const { org_id } = req.query;

		try {
			const data = await Ticket.findById(ticket_id, org_id)
			if (!data) {
				return Response.send(res, 404, null, 'Ticket not found', false)
			}
			return Response.send(
				res,
				200,
				data,
				'Ticket retrieved successfully'
			)
		} catch (err) {
			return next(err)
		}
	}),

	findByParameter: catchAsync(async (req, res, next) => {
		try {
			const { org_id, status } = req.params;
			console.log(org_id, status);
			if (!status && !(status == 'ongoing' || 'archived')) {
				return Response.send(res, 403, null, 'status is invalid', false)
			}
			if (!org_id) {
				return Response.send(res, 403, 'add org_id as param', false)
			}
			const data = await Ticket.findByParameter({ status }, org_id)
			if (!data) {
				return Response.send(res, 404, null, 'Ticket with this status does not exist', false)
			}
			return Response.send(
				res,
				200,
				data,
				'successfully retrieved by status',
				true
			)
		} catch (err) {
			return next(err)
		}
	}),

	update: catchAsync(async (req, res, next) => {
		try {
			const { payload } = req.body;
			const { org_id, ticket_id } = req.query;
			// update ticket
			const data = await Ticket.update(ticket_id, payload, org_id);
			if (!data) {
				return Response.send(res, 404, data, 'Failed to update ticket', false)
			}
			// return data
			return Response.send(res, 200, data, "Update successful");
		} catch (err) {
			err.message
		}
	}),
	vote: catchAsync(async (req, res, next) => {
		 // get id and payload from the frontend, id is the id of the current ticket, the payload will be an object containing the  vote weight of user that's voting + the current value of the ticket's downvotes/upvotes like: payload:{total_downvotes: voter.voter_weight + ticket.total_downvotes}
		try {
			const { payload, ticket_id } = req.body;
			const { org_id  } = req.query;
			// update ticket
			const data = await Ticket.update(ticket_id, payload, org_id)
			// console.log(data)
			const tic = await Ticket.findById(ticket_id, org_id)
			const tot = tic.total_upvotes + tic.total_downvotes
			const upV = 100 * (tic.total_upvotes / tot);
			const downV = 100  * (tic.total_downvotes / tot);
				// 100 * (u/tot)
				const percU = await Ticket.update(ticket_id, {pos_votes:Math.round(upV)}, org_id)
				const percD = await Ticket.update(ticket_id, {neg_votes:Math.round(downV)}, org_id)
				return Response.send(
					res,
					200,
					data,
					`You voted successfully!`,
					true
				)
		} catch (err) {
			err.message
		}
	}),
}

export default ticketController;
