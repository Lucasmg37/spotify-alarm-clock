import { Teste } from "../entities/teste";

interface ICreateTesteDTO {
  name: string;
  lastName?: string;
}

interface ITesteRepository {
  create({ name, lastName }: ICreateTesteDTO): Promise<Teste>;
  get(): Promise<Teste[]>;
}

export { ITesteRepository, ICreateTesteDTO };
