import { Integrations } from "../../../shared/interfaces/Integrations";

class CreateUserDTO {
  email: string;
  isPremium: boolean;
  disabled: boolean;
  integrationData: object;
  image?: string;
  integration: Integrations;
  name: string;
}

export { CreateUserDTO };
