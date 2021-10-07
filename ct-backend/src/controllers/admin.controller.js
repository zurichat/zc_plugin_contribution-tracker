// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import { DATABASE_CONFIG } from "../config/index"
import { PLUGIN_ID } from "../config/index"
import voterSchema from "../models/voter.model"
import ZuriDatabase from "../zuricore/db"

const Voter = new ZuriDatabase("ct_voters");

const AdminController = {

  async addVoter(req, res, next) {
    try {

      const { first_name, last_name, email, user_name, voting_weight } = req.body;
      const { org_id } = req.query;

      const voter = await voterSchema.validateAsync({
        first_name,
        last_name,
        email,
        user_name,
        voting_weight,
      }).catch((e) => {
        Response.send(
          res,
          422,
          e,
          "validation failed"
        )
      });

      // Save the voter to the database
      const newVoterDBData = await Voter.create(voter, org_id);


      return Response.send(
        res,
        200,
        newVoterDBData,
        "Voter added successfully"
      )
    } catch (error) {
      next(error)
    }
  },


  async updateVoter(req, res, next) {
    try {

      const { voting_weight } = req.body;
      const { org_id, voter_id } = req.query;

      const voter = {
        voting_weight: voting_weight,
        updated_at: Date.now()
      };

      // Save the voter to the database
      const newVoterDBData = await Voter.update(voter_id, voter, org_id);


      return Response.send(
        res,
        200,
        newVoterDBData,
        "Voter added successfully"
      )
    } catch (error) {
      next(error)
    }
  },



  async getVoters(req, res, next) {
    try {
      const { org_id } = req.query;
      const voters = await Voter.fetchAll(org_id);
      Response.send(
        res,
        200,
        voters,
        "Voters retrieved successfully"
      )
    } catch (error) {
      Response.send(
        res,
        422,
        error,
        error.message
      )
    }
  },

  //get a single voter
  async getVoter(req, res, next) {
    try {
      const { org_id } = req.query;
      const { email } = req.query;

      const voter = await Voter.findOne({ email: email }, org_id);
      Response.send(
        res,
        200,
        voter,
        "Voter retrived succcessfully"
      )
    } catch (error) {
      next(error);
    }
  },

  //remove a voter
  async removeVoter(req, res, next) {
    try {
      const { org_id } = req.query;
      const { email } = req.query;
      const response = await Voter.delete({ email: email }, org_id,);
      Response.send(
        res,
        200,
        response,
        "Voter deleted successfully"
      )
    } catch (error) {
      next(error);
    }
  },
}

export default AdminController
