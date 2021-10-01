const adminRouter = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { userAuth } = require("../middlewares/auth.middleware");


// retrieve voters
adminRouter.get("/voters", AdminController.getVoters );

// add voter
adminRouter.post("/voters", AdminController.addVoter );

//remove voter
// adminRouter.delete("/voters", AdminController.removeVoter);


// Export module
module.exports = adminRouter;