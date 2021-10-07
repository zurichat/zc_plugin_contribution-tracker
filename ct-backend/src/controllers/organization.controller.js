// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import ZuriOrganization from "../zuricore/organization"
import ZuriDb from '../zuricore/db';


const Organization = new ZuriOrganization();
const Voter = new ZuriDb("ct_voters");

const OrganizationController = {

  async getMembers(req, res, next) {
    try {

      const { org_id } = req.params;
      const members = await Organization.getAllMembers(org_id);
      return Response.send(
        res,
        200,
        members,
        "Organizatin members retrieved successfully"
      )
    } catch (error) {
      next(error)
    }
  },


  async getMember(req, res, next) {
    try {

      const { org_id, member_id } = req.params

      const bearerHeader = req.headers['authorization'];

      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      const member = await Organization.getMember(org_id, member_id, bearerToken);

      if (member) {
        const user_name = member.user_name
        const voters = await Voter.findAll(org_id)
        switch (member.role) {
          case "owner":
            member.ct_admin = true
            break;
          case "admin":
            member.ct_admin = true
            break;
          default:
            member.ct_admin = false
        }
        voters.forEach((voter) => {
          if (voter.user_name == user_name) {
            return member.isVoter = true;
          } else {
            return member.ct_voter = false;
          }
        })
      }

      // const voters = this.isVoter(member, org_id)
      return Response.send(
        res,
        200,
        member,
        "Member retrieved successfully"
      )
    } catch (error) {
      next(error)
    }
  },


}

export default OrganizationController
