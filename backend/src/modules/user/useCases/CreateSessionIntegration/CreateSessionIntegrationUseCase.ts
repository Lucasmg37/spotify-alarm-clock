import { inject, injectable } from "tsyringe";

import { CreateSessionIntegrationDTO } from "../../dtos/CreateSessionIntegration.DTO";
import { SessionIntegration } from "../../entities/SessionIntegration";
import { ISessionIntegrationRepository } from "../../repositories/interfaces/ISessionIntegrationRepository";

@injectable()
class CreateSessionIntegrationUseCase {
  constructor(
    @inject("SessionIntegrationRepository")
    private sessionIntegrationRepository: ISessionIntegrationRepository
  ) {}

  async execute(
    sessionDto: CreateSessionIntegrationDTO
  ): Promise<SessionIntegration> {
    return this.sessionIntegrationRepository.create(sessionDto);
  }
}

export { CreateSessionIntegrationUseCase };
