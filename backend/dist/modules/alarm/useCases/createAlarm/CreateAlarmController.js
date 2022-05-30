"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAlarmController = void 0;

var _tsyringe = require("tsyringe");

var _CreateAlarmUseCase = require("./CreateAlarmUseCase");

class CreateAlarmController {
  async handle(req, res) {
    const createAlarmUseCase = _tsyringe.container.resolve(_CreateAlarmUseCase.CreateAlarmUseCase);

    const {
      user
    } = req;
    const {
      name,
      repeat,
      time,
      weekDays,
      nameDevice,
      idDevice,
      mediaType,
      volume,
      idsMedia
    } = req.body;
    const alarm = await createAlarmUseCase.execute({
      alarm: {
        active: true,
        endAt: null,
        name,
        repeat: repeat || false,
        time,
        userUuid: user.id,
        weekDays: weekDays || [],
        alarmDevice: {
          name: nameDevice,
          serviceDevice: "spotify",
          reference_id: idDevice
        },
        alarmMedia: {
          mediaService: "spotify",
          mediaType,
          volume: volume || 100,
          references_ids: idsMedia
        }
      }
    });
    return res.send(alarm);
  }

}

exports.CreateAlarmController = CreateAlarmController;