/* eslint-disable no-use-before-define */
import { Teste } from "../../model/teste";
import { ICreateTesteDTO, ITesteRepository } from "../ITesteRepository";

class TesteRepository implements ITesteRepository {
  private testeModel: Teste;

  // Singleton
  private static instance: TesteRepository;

  private constructor() {
    this.testeModel = new Teste();
  }

  // Singleton
  public static getInstance(): TesteRepository {
    if (!this.instance) {
      this.instance = new TesteRepository();
    }

    return this.instance;
  }

  create({ name, lastName }: ICreateTesteDTO): Teste {
    Object.assign(this.testeModel, {
      name,
      lastName,
    });

    return this.testeModel;
  }

  get(): Teste {
    return this.testeModel;
  }
}

export { TesteRepository };
