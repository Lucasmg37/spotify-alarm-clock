import { injectable, inject } from "tsyringe";

import { Teste } from "../../entities/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

interface ICreateTesteUseCaseParams {
  name: string;
}

@injectable()
class CreateTesteUseCase {
  constructor(
    @inject("TesteRepository")
    private testeRepository: ITesteRepository
  ) {}

  async execute({ name }: ICreateTesteUseCaseParams): Promise<Teste> {
    if (name === "Lucas") {
      throw new Error("Nome não pode ser Lucas");
    }

    return this.testeRepository.create({ name });
  }
}

export { CreateTesteUseCase };
