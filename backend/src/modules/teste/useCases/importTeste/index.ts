import { TesteRepository } from "../../repositories/implementations/TesteRepository";
import { ImportTesteController } from "./ImportTesteController";
import { ImportTesteUseCase } from "./ImportTesteUseCase";

const testeRepository = TesteRepository.getInstance();
const importTesteUseCase = new ImportTesteUseCase(testeRepository);
const importTesteController = new ImportTesteController(importTesteUseCase);

export { importTesteController };
