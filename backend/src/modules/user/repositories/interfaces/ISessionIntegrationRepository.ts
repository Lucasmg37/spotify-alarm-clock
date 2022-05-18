import { CreateSessionIntegrationDTO } from "../../dtos/CreateSessionIntegration.DTO";
import { SessionIntegration } from "../../entities/SessionIntegration";

interface ISessionIntegrationRepository {
  create(session: CreateSessionIntegrationDTO): Promise<SessionIntegration>;
  findByUser(userId: string): Promise<SessionIntegration>;
}

export { ISessionIntegrationRepository };
