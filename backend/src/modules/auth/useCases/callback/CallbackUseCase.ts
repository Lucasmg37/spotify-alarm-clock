import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { Integrations } from "../../../../shared/interfaces/Integrations";
import { ISpotifyService } from "../../../spotify/services/interfaces/ISpotifyService";
import { User } from "../../../user/entities/User";
import { ISessionIntegrationRepository } from "../../../user/repositories/interfaces/ISessionIntegrationRepository";
import { IUserRepository } from "../../../user/repositories/interfaces/IUserRepository";

@injectable()
class CallbackUseCase {
  constructor(
    @inject("SpotifyService")
    private spotifyService: ISpotifyService,
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("SessionIntegrationRepository")
    private sessionIntegrationRepository: ISessionIntegrationRepository
  ) {}

  private generateToken(user: User): string {
    const token = sign({}, process.env.JWT_KEY, {
      subject: user.uuid,
      expiresIn: "1d",
    });
    return token;
  }

  async execute(code: string): Promise<string> {
    const tokens = await this.spotifyService.getUserCredentialsAuth(code);
    const userData = await this.spotifyService.me();

    let user = await this.userRepository.findByEmail(userData.email);

    let token = "";

    // Create new user if not exists
    if (user === null) {
      user = await this.userRepository.create({
        name: userData.display_name,
        email: userData.email,
        disabled: false,
        integrationData: userData,
        image: userData?.images[0]?.url,
        isPremium: userData.product === "premium",
        integration: Integrations.SPOTIFY,
      });
    }

    token = this.generateToken(user);

    // Create or Update user session spotify
    const session = await this.sessionIntegrationRepository.findByUser(
      user.uuid
    );

    if (session === null) {
      await this.sessionIntegrationRepository.create({
        userUuid: user.uuid,
        token: tokens.access_token,
        refreshToken: tokens.refresh_token,
        integration: Integrations.SPOTIFY,
      });

      return token;
    }

    await this.sessionIntegrationRepository.create({
      uuid: session.uuid,
      token: tokens.access_token,
      refreshToken: tokens.refresh_token,
      integration: Integrations.SPOTIFY,
      userUuid: user.uuid,
    });

    return token;
  }
}

export { CallbackUseCase };
