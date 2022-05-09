import { parse } from "csv-parse";
import fs from "fs";

import {
  ICreateTesteDTO,
  ITesteRepository,
} from "../../repositories/ITesteRepository";

interface IImportTeste {
  name: string;
  lastName: string;
}

class ImportTesteUseCase {
  constructor(private testeRepository: ITesteRepository) {}

  loadName(file: Express.Multer.File): Promise<IImportTeste> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const userTeste = {} as IImportTeste;

      const parseFile = parse({
        delimiter: ",",
      });

      // A cada pedaço do something
      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, lastName] = line;

        userTeste.name = name;
        userTeste.lastName = lastName;
      });

      parseFile.on("end", () => {
        resolve(userTeste);
      });

      parseFile.on("error", () => {
        reject(new Error("Error"));
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<ICreateTesteDTO> {
    const teste = await this.loadName(file);
    const data = await this.testeRepository.create(teste);
    fs.unlinkSync(file.path);
    return data;
  }
}

export { ImportTesteUseCase };
