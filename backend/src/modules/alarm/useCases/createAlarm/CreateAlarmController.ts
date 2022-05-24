import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAlarmUseCase } from "./CreateAlarmUseCase";

class CreateAlarmController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createAlarmUseCase = container.resolve(CreateAlarmUseCase);

    const { user } = req;
    const {
      name,
      repeat,
      time,
      weekDays,
      nameDevice,
      idDevice,
      mediaType,
      volume,
      idsMedia,
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
          reference_id: idDevice,
        },
        alarmMedia: {
          mediaService: "spotify",
          mediaType,
          volume: volume || 100,
          references_ids: idsMedia,
        },
      },
    });

    return res.send(alarm);
  }
}

export { CreateAlarmController };
