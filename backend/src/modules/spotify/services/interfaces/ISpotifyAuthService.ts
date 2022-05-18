interface IClienteCredentials {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface IUserCredentials {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  error?: string;
  error_description?: string;
}

interface ISpotifyAuthService {
  setUserAccessToken(data: IUserCredentials): void;
  clientCredentialsAuth(): Promise<IClienteCredentials>;
  userCredentialsAuth(code: string): Promise<IUserCredentials>;
}

export { ISpotifyAuthService, IClienteCredentials, IUserCredentials };
