export async function userOrg(req, res, next) {
  try {
    const { org_id } = req.query;

    // confirm org_id is provided as query param
    if (org_id) {
      return next();
    }

    res.status(403).json({ 
      status: 'error',
      message: "Please add  org_id as query param"
    });
  } catch (error) {
     res.status(502).json({ 
      status: 'error',
      message: error
    });
  }
}
