import { Teste } from "../model/teste";

interface ICreateTesteDTO {
  name: string;
}

interface ITesteRepository {
  create({ name }: ICreateTesteDTO): Teste;
  get(): Teste;
}

export { ITesteRepository, ICreateTesteDTO };
