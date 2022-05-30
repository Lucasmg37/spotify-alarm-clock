"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _dataSource = require("../../../../data-source");

var _User = require("../entities/User");

class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _dataSource.AppDataSource.getRepository(_User.User);
  }

  async findOneByUuid(uuid) {
    return this.repository.findOneBy({
      uuid
    });
  }

  async create({
    name,
    email,
    isPremium,
    disabled,
    integrationData,
    image,
    integration
  }) {
    const newUser = await this.repository.create({
      name,
      email,
      isPremium,
      disabled,
      image,
      integration
    });
    newUser.setIntegrationData(integrationData);
    return this.repository.save(newUser);
  }

  async findByEmail(email) {
    return this.repository.findOneBy({
      email
    });
  }

}

exports.UserRepository = UserRepository;