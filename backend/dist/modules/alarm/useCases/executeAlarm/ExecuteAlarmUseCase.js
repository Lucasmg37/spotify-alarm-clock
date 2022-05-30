"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecuteAlarmUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISpotifyService = require("../../../spotify/services/interfaces/ISpotifyService");

var _ISessionIntegrationRepository = require("../../../user/repositories/interfaces/ISessionIntegrationRepository");

var _IAlarmCallsRepository = require("../../repositories/interfaces/IAlarmCallsRepository");

var _IAlarmRepository = require("../../repositories/interfaces/IAlarmRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

let ExecuteAlarmUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("AlarmRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("AlarmCallsRepository")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("SpotifyService")(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)("SessionIntegrationRepository")(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IAlarmRepository.IAlarmRepository === "undefined" ? Object : _IAlarmRepository.IAlarmRepository, typeof _IAlarmCallsRepository.IAlarmCallsRepository === "undefined" ? Object : _IAlarmCallsRepository.IAlarmCallsRepository, typeof _ISpotifyService.ISpotifyService === "undefined" ? Object : _ISpotifyService.ISpotifyService, typeof _ISessionIntegrationRepository.ISessionIntegrationRepository === "undefined" ? Object : _ISessionIntegrationRepository.ISessionIntegrationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class ExecuteAlarmUseCase {
  constructor(alarmRepository, alarmCallsRepository, spotifyService, sessionIntegrationRepository) {
    this.alarmRepository = alarmRepository;
    this.alarmCallsRepository = alarmCallsRepository;
    this.spotifyService = spotifyService;
    this.sessionIntegrationRepository = sessionIntegrationRepository;
  }

  async execute() {
    const alarms = await this.alarmRepository.getValidAlarms();

    if (alarms) {
      await Promise.all(alarms.map(async alarm => {
        const lastCall = await this.alarmCallsRepository.getLastByAlarm(alarm.uuid); // was called

        if (lastCall && lastCall.time === alarm.time) {
          return false;
        } // verify if it let be call


        const now = new Date().getTime();
        const nowDate = new Date();
        const timeAlarm = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()} ${alarm.time}`).getTime();
        const diff = timeAlarm - now;
        const letBeCalled = timeAlarm <= now; // 30 minutes

        if (diff < -(60000 * 30)) {
          return false;
        }

        if (!letBeCalled) {
          return false;
        }

        const weekDaysArray = alarm.getWeekDays();
        const session = await this.sessionIntegrationRepository.findByUser(alarm.userUuid);
        await this.spotifyService.authService.setUserAccessToken({
          access_token: session.token,
          refresh_token: session.refreshToken,
          expires_in: 3600,
          token_type: "Bearer",
          scope: ""
        });
        await this.spotifyService.playTrack({
          device_id: alarm.alarmDevice.reference_id,
          uris: alarm.alarmMedia.getReferencesIds()
        }); // dont repeat case

        if (!alarm.repeat) {
          await this.alarmRepository.create({ ...alarm,
            active: false,
            weekDays: weekDaysArray
          });
        } else {
          // verify days of week
          const weekDay = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"][nowDate.getDay()];

          if (weekDaysArray.includes(weekDay)) {
            if (alarm.endAt) {
              const dateEnd = new Date(`${alarm.endAt.getFullYear()}-${alarm.endAt.getMonth() + 1}-${alarm.endAt.getDate()}`);
              const dateToday = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`);

              if (dateEnd === dateToday) {
                await this.alarmRepository.create({ ...alarm,
                  active: false,
                  weekDays: weekDaysArray
                });
              }
            }
          }
        }

        await this.alarmCallsRepository.create({
          alarmUuid: alarm.uuid,
          time: alarm.time
        });
        return true;
      }));
    }
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.ExecuteAlarmUseCase = ExecuteAlarmUseCase;