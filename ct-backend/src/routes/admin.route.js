const adminRouter = require("express").Router();
import AdminController from "../controllers/admin.controller"
import { userAuth } from "../middlewares/auth.middleware"
import { userOrg } from "../middlewares/check_org.middleware"



// retrieve voters, add voter, update voter, remove voter
adminRouter.route("/voters", userOrg)
  .get(AdminController.getVoters)
  .post(AdminController.addVoter)
  .patch(AdminController.updateVoter)
  .delete(AdminController.removeVoter)

//get single voter
adminRouter.get('/voter', userOrg, AdminController.getVoter)

// Export module
export default adminRouter
