// Custom Modules
import Response from '../utils/response'
const CustomError = require("../utils/custom-error");
const { DATABASE_CONFIG } = require("../config/index");
const { PLUGIN_ID } = require("../config/index");
const voterSchema = require("../models/voter.model");
const ZuriDatabase = require("../zuricore/db");

const Voter = new ZuriDatabase("ct_voters");

class AdminController {

  async addVoter (req, res, next) {
    try {

      const { first_name, last_name,  user_name, voting_weight } = req.body;
      const { org } = req.query;

      const voter  = await voterSchema.validateAsync({
        first_name,
        last_name,
        user_name,
        voting_weight,
      }).catch((e)=>{
        Response.send(
          res,
          422,
          e,
          "validation failed"
        )

         // res.status(422).send(response("validation failed", e));
      });


      // Save the voter to the database
      const newVoterDBData = await Voter.create(voter, org);


      return Response.send(
        res,
        200,
        newVoterDBData,
        "Voter added successfully"
      )
    } catch (error) {
       next(error)
       console.log(error)
    }
  }

  //get all voters
  async getVoters (req, res, next) {
    try {
      const { org } = req.query;
      const voters = await Voter.fetchAll(org);
      Response.send(
        res,
        200,
        voters,
        "Voters retrieved successfully"
      )
    } catch (error) {
      next(error);
    }
  }

  //get a single voter
  async getVoter (req, res, next) {
    try {
      const voter = await Voter.findById(req.params.id)
      Response.send(
        res, 
        200, 
        voter
      )
    } catch(error) {
      next(error);
    }
  }

  //remove a voter
  async removeVoter (req, res, next) {
    try {
      const voter = await Voter.findByIdAndRemove(req.params.id)
      if (!voter) {
        Response.send(
          res,
          404,
          voter,
          "Voter Not Found"
        )
      }
    } catch (error) {
      next(error);
    }
  }
}

// Export Module
module.exports = new AdminController();
