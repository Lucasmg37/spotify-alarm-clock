import { Teste } from "../model/teste";

interface ICreateTesteDTO {
  name: string;
}

class TesteRepository {
  private readonly testeModel: Teste;

  constructor() {
    this.testeModel = new Teste();
  }

  create({ name }: ICreateTesteDTO): Teste {
    Object.assign(this.testeModel, {
      name,
    });

    return this.testeModel;
  }

  get(): Teste {
    return this.testeModel;
  }
}

export { TesteRepository };
