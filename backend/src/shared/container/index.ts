import { container } from "tsyringe";

import { AlarmCallsRepository } from "../../modules/alarm/repositories/AlarmCallsRepository";
import { AlarmDeviceRepository } from "../../modules/alarm/repositories/AlarmDeviceRepository";
import { AlarmMediaRepository } from "../../modules/alarm/repositories/AlarmMediaRepository";
import { AlarmRepository } from "../../modules/alarm/repositories/AlarmRepository";
import { IAlarmCallsRepository } from "../../modules/alarm/repositories/interfaces/IAlarmCallsRepository";
import { IAlarmDeviceRepository } from "../../modules/alarm/repositories/interfaces/IAlarmDeviceRepository";
import { IAlarmMediaRepository } from "../../modules/alarm/repositories/interfaces/IAlarmMediaRepository";
import { IAlarmRepository } from "../../modules/alarm/repositories/interfaces/IAlarmRepository";
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

container.registerType<IAlarmRepository>("AlarmRepository", AlarmRepository);
container.registerType<IAlarmMediaRepository>(
  "AlarmMediaRepository",
  AlarmMediaRepository
);

container.registerType<IAlarmDeviceRepository>(
  "AlarmDeviceRepository",
  AlarmDeviceRepository
);

container.registerType<IAlarmCallsRepository>(
  "AlarmCallsRepository",
  AlarmCallsRepository
);
