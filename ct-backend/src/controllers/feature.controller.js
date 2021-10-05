/* eslint-disable */
import ZuriDatabase from '../zuricore/db'
import Response from '../utils/response'
import feature_schema from '../models/features.model'

const Feature = new ZuriDatabase('ct_feature');

const featureController = {
	async create(req, res, next) {

		try {
			const { featureTitle, allocatedTime, created_at } = req.body;
			const { org_id, user_id} = req.query;

			const features = await feature_schema.validateAsync({
				featureTitle,
				allocatedTime,
				ownerId: user_id,
				created_at

			})

			const saveFeature = await Feature.create({ features, org_id })
			return Response.send(
				res,
				201,
				saveFeature,
				'Feature created successfully'
			)
		} catch (error) {
			return next(error)
		}
	},

	fetchAll: async (req, res, next) => {
		try {
			const { org_id } = req.query
			let data = await Feature.fetchAll(org_id)

			return Response.send(
				res,
				200,
				data,
				'Features retrieved successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	fetchOne: async (req, res, next) => {
		try {
			const { org_id } = req.query;
			const { feature_id } = req.query;
			const data = await Feature.fetchOne({ feature: feature_id }, org_id)

			return Response.send(
				res,
				200,
				data,
				'Feature retrived successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	
	
}

export default featureController;
