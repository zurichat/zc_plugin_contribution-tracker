// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import catchAsync from '../utils/catchAsync'
import voterSchema from "../models/voter.model"
import ZuriDb from '../zuricore/db'

const Voter = new ZuriDb("ct_voters");

const AdminController = {

  addVoter: catchAsync(async (req, res, next) => {
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
        return Response.send(
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
  }),


  updateVoter: catchAsync(async (req, res, next) => {
    try {

      const { voting_weight } = req.body;
      const { org_id, voter_id } = req.query;

      const voter = {
        voting_weight,
        updated_at: Date.now()
      };

      // Save the voter to the database
      const newVoterDBData = await Voter.update(voter_id, voter, org_id);

      return Response.send(
        res,
        201,
        newVoterDBData,
        "Voter updated successfully"
      )
    } catch (error) {
      next(error)
    }
  }),



  getVoters: catchAsync(async (req, res, next) => {
    try {
      const { org_id } = req.query;
      const voters = await Voter.findAll(org_id);
      if (!voters) {
        return Response.send(res, 404, voters, 'voters not found', false)
      }
      return Response.send(
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
  }),

  //get a single voter
  getVoter: catchAsync(async (req, res, next) => {
    try {
      const { email, org_id } = req.query;

      const voter = await Voter.findByParameter({ email }, org_id);
      if (!voter) {
        return Response.send(res, 404, voter, 'voter not found', false)
      }
      return Response.send(
        res,
        200,
        voter,
        "Voter retrieved succcessfully"
      )
    } catch (error) {
      next(error);
    }
  }),

  //remove a voter
  removeVoter: catchAsync(async (req, res, next) => {
    try {
      const { org_id, email } = req.query;
      const response = await Voter.delete({ email: email }, org_id,);
      return Response.send(
        res,
        200,
        response,
        "Voter deleted successfully"
      )
    } catch (error) {
      next(error);
    }
  }),
}

export default AdminController
