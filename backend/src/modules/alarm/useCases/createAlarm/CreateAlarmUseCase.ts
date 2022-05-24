import { inject, injectable } from "tsyringe";

import { CreateAlarmDeviceDTO } from "../../dtos/CreateAlarmDevice.DTO";
import { CreateAlarmMediaDTO } from "../../dtos/CreateAlarmMedia.DTO";
import { Alarm } from "../../entities/Alarm";
import { IAlarmDeviceRepository } from "../../repositories/interfaces/IAlarmDeviceRepository";
import { IAlarmMediaRepository } from "../../repositories/interfaces/IAlarmMediaRepository";
import { IAlarmRepository } from "../../repositories/interfaces/IAlarmRepository";

interface IRequestProps {
  userUuid: string;
  name: string;
  time: string;
  repeat: boolean;
  weekDays: string[];
  endAt: Date | null;
  active: boolean;
  alarmMedia: CreateAlarmMediaDTO;
  alarmDevice: CreateAlarmDeviceDTO;
}

interface IExecuteProps {
  alarm: IRequestProps;
}

@injectable()
class CreateAlarmUseCase {
  constructor(
    @inject("AlarmRepository")
    private alarmRepository: IAlarmRepository,
    @inject("AlarmMediaRepository")
    private alarmMediaRepository: IAlarmMediaRepository,
    @inject("AlarmDeviceRepository")
    private alarmDeviceRepository: IAlarmDeviceRepository
  ) {}

  async execute(data: IExecuteProps): Promise<Alarm> {
    const { alarm } = data;

    const alarmMedia = await this.alarmMediaRepository.create(alarm.alarmMedia);

    const alarmDevice = await this.alarmDeviceRepository.create(
      alarm.alarmDevice
    );

    const alarmCreated = await this.alarmRepository.create({
      ...alarm,
      alarmDevice,
      alarmMedia,
    });

    return alarmCreated;
  }
}

export { CreateAlarmUseCase };
