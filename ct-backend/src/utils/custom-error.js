class CustomError extends Error {
  /**
   * Create custom error
   *
   * @param {*} message Error message for request response
   * @param {number} statusCode HTTP status code. Default is 400
   */
  constructor(message, statusCode, trace = null) {
    super(message);
    this.name = this.constructor.name;
    this.status = statusCode || 400;
    this.trace = trace;
  }
}

// Export Module
module.exports = CustomError;