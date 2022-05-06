import { Teste } from "../../model/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

interface ICreateTesteUseCaseParams {
  name: string;
}

class CreateTesteUseCase {
  constructor(private testeRepository: ITesteRepository) {}

  execute({ name }: ICreateTesteUseCaseParams): Teste {
    if (name === "Lucas") {
      throw new Error("Nome não pode ser Lucas");
    }

    return this.testeRepository.create({ name });
  }
}

export { CreateTesteUseCase };
