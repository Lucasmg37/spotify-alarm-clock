import { inject, injectable } from "tsyringe";

import { AlarmUtils } from "../../../../utils/AlarmUtils";
import { ISpotifyService } from "../../../spotify/services/interfaces/ISpotifyService";
import { ISessionIntegrationRepository } from "../../../user/repositories/interfaces/ISessionIntegrationRepository";
import { IAlarmCallsRepository } from "../../repositories/interfaces/IAlarmCallsRepository";
import { IAlarmRepository } from "../../repositories/interfaces/IAlarmRepository";

@injectable()
class ExecuteAlarmUseCase {
  constructor(
    @inject("AlarmRepository")
    private alarmRepository: IAlarmRepository,
    @inject("AlarmCallsRepository")
    private alarmCallsRepository: IAlarmCallsRepository,
    @inject("SpotifyService")
    private spotifyService: ISpotifyService,
    @inject("SessionIntegrationRepository")
    private sessionIntegrationRepository: ISessionIntegrationRepository
  ) {}

  async execute(): Promise<void> {
    const alarms = await this.alarmRepository.getValidAlarms();

    if (alarms) {
      await Promise.all(
        alarms.map(async (alarm) => {
          const lastCall = await this.alarmCallsRepository.getLastByAlarm(
            alarm.uuid
          );

          // was called
          if (lastCall && lastCall.time === alarm.time) {
            return false;
          }

          // verify if it let be call
          const now = new Date().getTime();
          const nowDate = new Date();
          const timeAlarm = new Date(alarm.nextAlarmDate).getTime();

          const diff = timeAlarm - now;
          const letBeCalled = timeAlarm <= now;

          // 30 minutes
          if (diff < -(60000 * 30)) {
            return false;
          }

          if (!letBeCalled) {
            return false;
          }

          const weekDaysArray = alarm.getWeekDays();

          const session = await this.sessionIntegrationRepository.findByUser(
            alarm.userUuid
          );

          await this.spotifyService.authService.setUserAccessToken({
            access_token: session.token,
            refresh_token: session.refreshToken,
            expires_in: 3600,
            token_type: "Bearer",
            scope: "",
          });

          await this.spotifyService.playTrack({
            device_id: alarm.alarmDevice.reference_id,
            uris: alarm.alarmMedia.getReferencesIds(),
          });

          // dont repeat case
          if (!alarm.repeat) {
            await this.alarmRepository.create({
              ...alarm,
              active: false,
              weekDays: weekDaysArray,
            });
          } else {
            // verify days of week
            const weekDay = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"][
              nowDate.getDay()
            ];

            if (weekDaysArray.includes(weekDay)) {
              if (alarm.endAt) {
                const dateEnd = new Date(
                  `${alarm.endAt.getFullYear()}-${
                    alarm.endAt.getMonth() + 1
                  }-${alarm.endAt.getDate()}`
                );

                const dateToday = new Date(
                  `${nowDate.getFullYear()}-${
                    nowDate.getMonth() + 1
                  }-${nowDate.getDate()}`
                );

                if (dateEnd === dateToday) {
                  await this.alarmRepository.create({
                    ...alarm,
                    active: false,
                    weekDays: weekDaysArray,
                  });
                }
              }
            }
          }

          await this.alarmRepository.create({
            ...alarm,
            nextAlarmDate: AlarmUtils.getNextAlarm(
              alarm.time,
              alarm.repeat,
              weekDaysArray
            ),
            weekDays: weekDaysArray,
          });

          await this.alarmCallsRepository.create({
            alarmUuid: alarm.uuid,
            time: alarm.time,
          });

          return true;
        })
      );
    }
  }
}

export { ExecuteAlarmUseCase };
