import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', function(req, res, next) {
  return res.status(200).json({ 
  	name: "contribution tracker plugin",
    stack: "VueJs, Tailwind & NodeJs",
    teaam_lead: "@Phosah",
  });
});

export default indexRouter;