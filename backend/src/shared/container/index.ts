import { container } from "tsyringe";

import { ISpotifyService } from "../../modules/spotify/services/interfaces/ISpotifyService";
import { SpotifyService } from "../../modules/spotify/services/SpotifyService";
import { TesteRepository } from "../../modules/teste/repositories/implementations/TesteRepository";
import { ITesteRepository } from "../../modules/teste/repositories/ITesteRepository";
import { ISessionIntegrationRepository } from "../../modules/user/repositories/interfaces/ISessionIntegrationRepository";
import { IUserRepository } from "../../modules/user/repositories/interfaces/IUserRepository";
import { SessionIntegrationRepository } from "../../modules/user/repositories/SessionIntegrationRepository";
import { UserRepository } from "../../modules/user/repositories/UserRepository";

container.registerSingleton<ITesteRepository>(
  "TesteRepository",
  TesteRepository
);

container.registerType<ISpotifyService>("SpotifyService", SpotifyService);

container.registerType<IUserRepository>("UserRepository", UserRepository);

container.registerType<ISessionIntegrationRepository>(
  "SessionIntegrationRepository",
  SessionIntegrationRepository
);
