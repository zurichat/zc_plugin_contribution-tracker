/* eslint-disable */
import ZuriDb from '../zuricore/db';
import Response from '../utils/response'
import feature_schema from '../models/features.model'
import catchAsync from '../utils/catchAsync'

const Feature = new ZuriDb('ct_feature');

const featureController = {
	async create(req, res, next) {

		try {
			const { featureTitle, allocatedTime, created_at } = req.body;
			const { org_id, user_id } = req.query;

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

	findAll: catchAsync(async (req, res, next) => {
		try {
			const { org_id } = req.query;
			const features = await Feature.findAll(org_id);
			if (!features) {
			  return Response.send(res, 404, features, 'features not found', false)
			}

			return Response.send(
				res,
				200,
				features,
				'Features retrieved successfully',
			)
		}catch (error) {
			Response.send(
			  res,
			  422,
			  error,
			  error.message
			)
		}
	}),

	findByParameter: async (req, res, next) => {
		try {
			const { org_id } = req.query;
			const { feature_id } = req.query;
			const data = await Feature.findByParameter({ feature: feature_id }, org_id)

			return Response.send(
				res,
				200,
				data,
				'Feature retrieved successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
}

export default featureController;
