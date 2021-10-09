import express from 'express';
import featureController from '../controllers/feature.controller'
const featureRouter = express.Router();

//get all tickets, create ticket
featureRouter.post('/', featureController.create)
//get a single feature
featureRouter.get('/:ticket_id', featureController.findByParameter)
// get all features
featureRouter.get('/all_features', featureController.findAll)


export default featureRouter;
