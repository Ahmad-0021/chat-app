// middleware/errorHandlerMiddleware.js

module.exports = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack to the console (for debugging)

  // Determine the status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Send a JSON response with the error message
  res.status(statusCode).json({
    message: err.message,
    // Optionally send the error stack in development only
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
