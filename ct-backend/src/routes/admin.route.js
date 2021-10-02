const adminRouter = require("express").Router();
import AdminController from "../controllers/admin.controller"
import { userAuth } from "../middlewares/auth.middleware"


// retrieve voters
adminRouter.get("/voters", AdminController.getVoters);

// add voter
adminRouter.post("/voters", AdminController.addVoter);

//update voter
adminRouter.patch("/voters", AdminController.updateVoter);

//remove voter
adminRouter.delete("/voters", AdminController.removeVoter);


// Export module
export default adminRouter