import { TesteRepository } from "../../repositories/implementations/TesteRepository";
import { CreateTesteController } from "./CreateTesteController";
import { CreateTesteUseCase } from "./CreateTesteUseCase";

const testeRepository = TesteRepository.getInstance();
const createTesteUseCase = new CreateTesteUseCase(testeRepository);
const createTesteController = new CreateTesteController(createTesteUseCase);

export { createTesteController };