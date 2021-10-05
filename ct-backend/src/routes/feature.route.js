import express from 'express';
import featureController from '../controllers/feature.controller'
const featureRouter = express.Router();

//get all tickets
featureRouter.get('/', featureController.fetchAll)
//get a single ticket
featureRouter.get('/:ticket_id', featureController.fetchOne)
//create ticket
featureRouter.post('/', featureController.create)


export default featureRouter;
