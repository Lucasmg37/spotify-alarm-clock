export interface IMeResponse {
  uuid: string;
  email: string;
  name: string;
  isPremium: boolean;
  disabled: boolean;
  integrationData: string;
  image?: string;
  integration: string;
}

interface IMe {
  get(): Promise<IMeResponse>;
}

export default IMe;
