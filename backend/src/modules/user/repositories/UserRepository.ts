import { Repository } from "typeorm";

import { AppDataSource } from "../../../data-source";
import { CreateUserDTO } from "../dtos/CreateUser.DTO";
import { User } from "../entities/User";
import { IUserRepository } from "./interfaces/IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findOneByUuid(uuid: string): Promise<User> {
    return this.repository.findOneBy({ uuid });
  }

  async create({
    name,
    email,
    isPremium,
    disabled,
    integrationData,
    image,
    integration,
  }: CreateUserDTO): Promise<User> {
    const newUser = await this.repository.create({
      name,
      email,
      isPremium,
      disabled,
      image,
      integration,
    });
    newUser.setIntegrationData(integrationData);
    return this.repository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
  }
}

export { UserRepository };
