// Package Modules
const Joi = require("joi");

// Game Schema
const ticket_schema = Joi.object({
  // Game Owner
  owner: Joi.object({
    user_id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
  }).required(),

    //ticket description   
  description: Joi.string().required(),

  //time created
  created_at: Joi.date().default(Date.now).allow(null),

  // Game Moves
  moves: Joi.array()
    .items(
      Joi.object({
        user_id: Joi.string().required(),
        position_fen: Joi.string().required(),
        board_state: Joi.string().required(),
      })
    )
    .allow(null),

  // messages
  messages: Joi.array()
    .items(
      Joi.object({
        user_name: Joi.string().required(),
        text: Joi.string().required(),
        image_url: Joi.string(),
      })
    )
    .allow(null),

  // game spectators
  reactions: Joi.array()
    .items(
      Joi.object({
        user_id: Joi.string().required(),
        user_name: Joi.string().required(),
        emoji: Joi.string(),
      })
    )
    .allow(null),
});

module.exports = ticket_schema;
