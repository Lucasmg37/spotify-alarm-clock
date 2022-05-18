import { CreateUserDTO } from "../../dtos/CreateUser.DTO";
import { User } from "../../entities/User";

interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findOneByUuid(uuid: string): Promise<User>;
}

export { IUserRepository };
