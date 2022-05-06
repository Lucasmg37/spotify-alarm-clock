import { Teste } from "../../model/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

class GetTesteUseCase {
  constructor(private testeRepository: ITesteRepository) {}

  execute(): Teste {
    return this.testeRepository.get();
  }
}

export { GetTesteUseCase };
