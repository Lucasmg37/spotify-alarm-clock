"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionIntegrationRepository = void 0;

var _dataSource = require("../../../data-source");

var _SessionIntegration = require("../entities/SessionIntegration");

class SessionIntegrationRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_SessionIntegration.SessionIntegration);
  }

  async create(data) {
    const newSession = await this.repository.create(data);
    return this.repository.save(newSession);
  }

  async findByUser(userUuid) {
    return this.repository.findOneBy({
      userUuid
    });
  }

}

exports.SessionIntegrationRepository = SessionIntegrationRepository;