/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'

const Ticket = new ZuriDatabase('Tickets')

const ticketController = {
  //create ticket
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
  //get all tickets
	fetchAll: async (req, res, next) => {
		try {

			const { org } = req.query;
			let data = await Ticket.fetchAll(org)

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

  //get a single ticket
	fetchOne: async (req, res, next) => {
		try {
      const { org_id } = req.query;
      const { ticket_id } = req.query;
			const data = await Ticket.fetchOne({ticket: ticket_id}, org_id)
      return Response.send(
        res,
        200,
        data
      )
		} catch (err) {
			return next(err)
		}
	},
}

export default ticketController;
