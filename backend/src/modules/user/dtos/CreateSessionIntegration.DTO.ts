import { Integrations } from "../../../shared/interfaces/Integrations";

class CreateSessionIntegrationDTO {
  uuid?: string;
  integration: Integrations;
  token?: string;
  refreshToken?: string;
  userUuid: string;
}

export { CreateSessionIntegrationDTO };
