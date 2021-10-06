// Package Modules
const Joi = require("joi");

// Comment Schema
// {
//   comment,
//   feature_id,
//   owner: { name, user_id, image_url },
//   created_at,
//   updated_at,
//   up_votes: [{ name, voting_weight }],
//   down_votes: [{ name, voting_weight }],
// }

const comment_schema = Joi.object({
  comment: Joi.string().required(),
  feature_id: Joi.string().required(),
  owner: Joi.object({
    name: Joi.string().required().label('owner.name'),
    user_id: Joi.string().required().label('owner.user_id'),
    image_url: Joi.string().required().label('owner.image_url'),
  }).required(),
  up_votes: Joi.array().required(),
  down_votes: Joi.array().required(),

  created_at: Joi.date().default(Date.now).allow(null),
  updated_at: Joi.date().allow(null),

});

module.exports = comment_schema;
