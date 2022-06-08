import { hash } from "bcrypt";
import { injectable, inject } from "tsyringe";

import { Teste } from "../../entities/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

interface ICreateTesteUseCaseParams {
  name: string;
  password: string;
}

@injectable()
class CreateTesteUseCase {
  constructor(
    @inject("TesteRepository")
    private testeRepository: ITesteRepository
  ) {}

  async execute({ name, password }: ICreateTesteUseCaseParams): Promise<Teste> {
    const passwordHash = await hash(password, 8);

    if (name === "Lucas") {
      throw new Error("Nome não pode ser Lucas");
    }

    return this.testeRepository.create({ name, password: passwordHash });
  }
}

export { CreateTesteUseCase };
