import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { ICreateTesteDTO } from "../../dtos/ICreateDto";
import { Teste } from "../../entities/teste";
import { ITesteRepository } from "../ITesteRepository";

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

  async create({ name, lastName, password }: ICreateTesteDTO): Promise<Teste> {
    const teste = this.repository.create({ name, lastName, password });
    await this.repository.save(teste);
    return teste;
  }

  async get(): Promise<Teste[]> {
    const tests = await this.repository.find();
    return tests;
  }
  async findByUserName(name: string): Promise<Teste> {
    const teste = await this.repository.findOneBy({ name });
    return teste;
  }
}

export { TesteRepository };
