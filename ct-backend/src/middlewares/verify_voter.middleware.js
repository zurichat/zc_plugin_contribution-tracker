import CustomError from "../utils/custom-error";
import ZuriDb from '../zuricore/db';
import Response from '../utils/response'

const Voter = new ZuriDb("ct_voters");

export async function verifyVoter(req, res, next) {
  try {
    const { org_id, voter_id, email } = req.query;
    const voter = await Voter.findByParameter({ email }, org_id);
    if (!voter) {
      return Response.send(res, 404, voter, 'Voter cannot be verified', false)
    }
    return next();

  } catch (error) {
    if (!error.name) error.statusCode = 401 // Sets all defined errors to 401
    return next(error)
  }
}
