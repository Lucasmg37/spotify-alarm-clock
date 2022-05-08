import { Teste } from "../model/teste";

interface ICreateTesteDTO {
  name: string;
  lastName?: string;
}

interface ITesteRepository {
  create({ name, lastName }: ICreateTesteDTO): Teste;
  get(): Teste;
}

export { ITesteRepository, ICreateTesteDTO };
