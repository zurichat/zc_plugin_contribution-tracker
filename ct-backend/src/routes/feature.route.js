import express from 'express';
import featureController from '../controllers/feature.controller'
const featureRouter = express.Router();

//get all tickets, create ticket
featureRouter.route('/').get(featureController.findAll).post(featureController.create)
//get a single ticket
featureRouter.get('/:ticket_id', featureController.findByParameter)




export default featureRouter;
