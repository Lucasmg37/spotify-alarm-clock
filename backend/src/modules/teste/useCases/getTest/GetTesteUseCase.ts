import { injectable, inject } from "tsyringe";

import { Teste } from "../../entities/teste";
import { ITesteRepository } from "../../repositories/ITesteRepository";

@injectable()
class GetTesteUseCase {
  constructor(
    @inject("TesteRepository")
    private testeRepository: ITesteRepository
  ) {}

  async execute(): Promise<Teste[]> {
    return this.testeRepository.get();
  }
}

export { GetTesteUseCase };
