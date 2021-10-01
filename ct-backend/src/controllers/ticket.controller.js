/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'

const Ticket = new ZuriDatabase('Tickets',)

const ticketController = {
	create: async (req, res, next) => {
		const {

		} = req.body

		try {
			const savedRecord = await Ticket.create({
				//payload goes in here
			})
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
			let data = await Ticket.fetchAll()

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
