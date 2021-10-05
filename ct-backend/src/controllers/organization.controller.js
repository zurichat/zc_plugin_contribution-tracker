// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import ZuriOrganization from "../zuricore/organization"

const Organization = new ZuriOrganization();

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
}

export default OrganizationController
