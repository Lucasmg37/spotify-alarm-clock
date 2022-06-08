"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = require("../errors/AppError");

async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const [, token] = authHeader.split(" ");

    if (token) {
      try {
        const {
          sub: user_id
        } = (0, _jsonwebtoken.verify)(token, process.env.JWT_KEY);
        req.user = {
          id: user_id
        };
        return next();
      } catch {
        throw new _AppError.AppError("Token is invalid.", 401);
      }
    }

    throw new _AppError.AppError("Token is missing.", 401);
  }

  throw new _AppError.AppError("Not authenticated.", 401);
}