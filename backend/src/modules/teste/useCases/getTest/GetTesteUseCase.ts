import { Teste } from "../../entities/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

class GetTesteUseCase {
  constructor(private testeRepository: ITesteRepository) {}

  async execute(): Promise<Teste[]> {
    return this.testeRepository.get();
  }
}

export { GetTesteUseCase };
