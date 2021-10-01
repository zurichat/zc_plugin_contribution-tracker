import Response from '../utils/response'

const ticketController = {
	create: async (req, res, next) => {
		const {

		} = req.body

		try {
			const savedRecord = await ticket.create({

			})
			return Response.send(
				res,
				201,
				savedRecord,
				'Deadline created successfully'
			)
		} catch (error) {
			return next(error)
		}
	},
	getAll: async (req, res, next) => {
		try {
			let data = await ticket.findAll()

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
	getById: async (req, res, next) => {
		try {
			const data = await ticket.findById(req.params.id)
		} catch (err) {
			return next(err)
		}
	},
}

export default ticketController
