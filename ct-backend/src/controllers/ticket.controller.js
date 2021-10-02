/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'
import ticket_schema from '../models/tickets.model'

const Ticket = new ZuriDatabase('ct_tickets');


const ticketController = {
	create: async (req, res, next) => {
		const {
			title,
			owner_id,
			description,
			commit_url,
			test_url,
		} = req.body
		const { org_id } = req.query
		try {
			const newTicket = {
				title,
				owner_id,
				description,
				commit_url,
				test_url,
				status: "requested",
			}

			await ticket_schema.validateAsync(newTicket);

			const savedRecord = await Ticket.create(
				newTicket, org_id)
			return Response.send(
				res,
				201,
				savedRecord,
				'Ticket created successfully'
			)
		} catch (error) {
			return next(error)
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
			const data = await Ticket.fetchOne()
		} catch (err) {
			return next(err)
		}
	},
}

export default ticketController;
