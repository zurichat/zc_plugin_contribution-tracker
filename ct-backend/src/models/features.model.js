// Package Modules
import Joi from 'joi'

// Feature Schema
const feature_schema = Joi.object({
 
  // Feature Owner
  ownerId: Joi.string().trim().label('ownerId'),
 
  // Feature title
 featureTitle: Joi.string().trim().required().label('featureTitle'),

  //allocated time for voting
  allocatedTime: Joi.number().default(0).required().label('allocatedTime'),

  //time created
  created_at: Joi.date().default(Date.now).label('created_at'),
  updated_at: Joi.date().allow(null).label('updated_at'),
});

export default feature_schema

