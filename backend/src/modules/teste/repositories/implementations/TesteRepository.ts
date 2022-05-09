import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { Teste } from "../../entities/teste";
import { ICreateTesteDTO, ITesteRepository } from "../ITesteRepository";

class TesteRepository implements ITesteRepository {
  private repository: Repository<Teste>;

  constructor() {
    this.repository = AppDataSource.getRepository(Teste);
  }

  // Singleton

  // private testeModel: Teste;

  // private static instance: TesteRepository;

  // private constructor() {
  //   this.testeModel = new Teste();
  // }

  // Singleton
  // public static getInstance(): TesteRepository {
  //   if (!this.instance) {
  //     this.instance = new TesteRepository();
  //   }

  //   return this.instance;
  // }

  async create({ name, lastName }: ICreateTesteDTO): Promise<Teste> {
    const teste = this.repository.create({ name, lastName });
    await this.repository.save(teste);
    return teste;
  }

  async get(): Promise<Teste[]> {
    const tests = await this.repository.find();
    return tests;
  }
}

export { TesteRepository };
