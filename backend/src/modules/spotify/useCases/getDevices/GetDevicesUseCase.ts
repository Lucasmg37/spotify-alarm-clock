import { inject, injectable } from "tsyringe";

import { ISessionIntegrationRepository } from "../../../user/repositories/interfaces/ISessionIntegrationRepository";
import { ISpotifyService } from "../../services/interfaces/ISpotifyService";

@injectable()
class GetDevicesUseCase {
  constructor(
    @inject("SpotifyService")
    private readonly spotifyService: ISpotifyService,
    @inject("SessionIntegrationRepository")
    private readonly sessionIntegrationRepository: ISessionIntegrationRepository
  ) {}

  public async execute(userUUid: string): Promise<unknown> {
    const session = await this.sessionIntegrationRepository.findByUser(
      userUUid
    );

    this.spotifyService.authService.setUserAccessToken({
      access_token: session.token,
      refresh_token: session.refreshToken,
      expires_in: 3600,
      token_type: "Bearer",
      scope: "",
    });
    return this.spotifyService.getDevices();
  }
}

export { GetDevicesUseCase };
