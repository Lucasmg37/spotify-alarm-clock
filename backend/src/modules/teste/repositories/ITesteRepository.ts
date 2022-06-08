import { ICreateTesteDTO } from "../dtos/ICreateTesteDTO";
import { Teste } from "../entities/teste";

interface ITesteRepository {
  create({ name, lastName, password }: ICreateTesteDTO): Promise<Teste>;
  get(): Promise<Teste[]>;
  findByUserName(name: string): Promise<Teste>;
}

export { ITesteRepository };
