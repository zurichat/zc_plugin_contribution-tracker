import CustomError from "../utils/custom-error";

const handleErrors = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
      trace: err.trace
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}


export default handleErrors;