"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

require("reflect-metadata");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

require("express-async-errors");

var _AppError = require("./errors/AppError");

var _routes = require("./routes");

var _swagger = _interopRequireDefault(require("./swagger.json"));

require("./database");

require("./shared/container");

require("./crons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_routes.router);
app.use((err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
    next();
  }

  console.log("❌", err);
  return response.status(500).json({
    status: "error",
    message: `Internal server error: ${err.message}`
  });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});