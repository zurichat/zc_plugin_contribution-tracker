/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'

const Ticket = new ZuriDatabase('Tickets',)

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

  //get a single ticket
	fetchOne: async (req, res, next) => {
		try {
			const data = await Ticket.fetchOne(req.params.id)
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
