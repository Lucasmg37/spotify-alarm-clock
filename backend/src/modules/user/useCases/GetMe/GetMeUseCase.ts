import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

@injectable()
class GetMeUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<User> {
    return this.userRepository.findOneByUuid(userId);
  }
}

export { GetMeUseCase };
