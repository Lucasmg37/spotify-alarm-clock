import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

@injectable()
class FindByEmailUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return null;
    }
    return user;
  }
}

export { FindByEmailUseCase };
