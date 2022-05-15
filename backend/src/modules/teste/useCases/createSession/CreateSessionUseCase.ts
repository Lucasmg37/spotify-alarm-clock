import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";

import { ITesteRepository } from "../../repositories/ITesteRepository";

interface ICreateSessionUseCaseParams {
  name: string;
  password: string;
}

interface IResponse {
  teste: {
    name: string;
    lastName: string;
  };
  token: string;
}

@injectable()
class CreateSessionUseCase {
  constructor(
    @inject("TesteRepository")
    private testeRepository: ITesteRepository
  ) {}

  async execute({
    name,
    password,
  }: ICreateSessionUseCaseParams): Promise<IResponse> {
    const teste = await this.testeRepository.findByUserName(name);

    if (!teste) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await compare(password, teste.password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    const token = sign({}, "secret", { subject: teste.uuid, expiresIn: "1d" });

    return {
      teste: {
        name: teste.name,
        lastName: teste.lastName,
      },
      token,
    };
  }
}

export { CreateSessionUseCase };
