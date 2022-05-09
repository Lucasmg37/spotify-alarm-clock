import { container } from "tsyringe";

import { TesteRepository } from "../../modules/teste/repositories/implementations/TesteRepository";
import { ITesteRepository } from "../../modules/teste/repositories/ITesteRepository";

container.registerSingleton<ITesteRepository>(
  "TesteRepository",
  TesteRepository
);
