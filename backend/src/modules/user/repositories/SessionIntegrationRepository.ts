import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { CreateSessionIntegrationDTO } from "../dtos/CreateSessionIntegration.DTO";
import { SessionIntegration } from "../entities/SessionIntegration";
import { ISessionIntegrationRepository } from "./interfaces/ISessionIntegrationRepository";

class SessionIntegrationRepository implements ISessionIntegrationRepository {
  private repository: Repository<SessionIntegration>;

  constructor() {
    this.repository = AppDataSource.getRepository(SessionIntegration);
  }

  async create(data: CreateSessionIntegrationDTO): Promise<SessionIntegration> {
    const newSession = await this.repository.create(data);
    return this.repository.save(newSession);
  }

  async findByUser(userUuid: string): Promise<SessionIntegration> {
    return this.repository.findOneBy({ userUuid });
  }
}

export { SessionIntegrationRepository };
