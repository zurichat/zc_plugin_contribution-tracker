const organizationRouter = require("express").Router();
import OrganizationController from "../controllers/organization.controller"
import { userAuth } from "../middlewares/auth.middleware"
import { userOrg } from "../middlewares/check_org.middleware"


// retrieve org members from zuri core
organizationRouter.get("/:org_id/members", OrganizationController.getMembers);

// retrieve a org members from zuri core
organizationRouter.get("/:org_id/members/:member_id", OrganizationController.getMember);


// Export module
export default organizationRouter
