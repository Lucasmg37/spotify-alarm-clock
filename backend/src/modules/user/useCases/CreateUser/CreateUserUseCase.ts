import { inject, injectable } from "tsyringe";

import { CreateUserDTO } from "../../dtos/CreateUser.DTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(user: CreateUserDTO): Promise<User> {
    return this.userRepository.create(user);
  }
}

export { CreateUserUseCase };
