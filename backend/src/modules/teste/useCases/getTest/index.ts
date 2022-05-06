import { TesteRepository } from "../../repositories/implementations/TesteRepository";
import { GetTesteController } from "./GetTesteController";
import { GetTesteUseCase } from "./GetTesteUseCase";

const testeRepository = TesteRepository.getInstance();
const getTesteUseCase = new GetTesteUseCase(testeRepository);
const getTesteController = new GetTesteController(getTesteUseCase);

export { getTesteController };
