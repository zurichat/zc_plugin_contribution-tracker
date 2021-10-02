const adminRouter = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { userAuth } = require("../middlewares/auth.middleware");


// retrieve voters
adminRouter.get("/voters", AdminController.getVoters );

//get single voter
adminRouter.get('/voter/:id', AdminController.getVoter)

// add voter
adminRouter.post("/voters", AdminController.addVoter );

//update voter
adminRouter.patch("/voters", AdminController.updateVoter);

//remove voter
adminRouter.delete("/voters", AdminController.removeVoter);


// Export module
module.exports = adminRouter;
