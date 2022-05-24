import { Repository } from "typeorm";

import { AppDataSource } from "../../../../data-source";
import { CreateAlarmDeviceDTO } from "../dtos/CreateAlarmDevice.DTO";
import { AlarmDevice } from "../entities/AlarmDevice";
import { IAlarmDeviceRepository } from "./interfaces/IAlarmDeviceRepository";

class AlarmDeviceRepository implements IAlarmDeviceRepository {
  private repository: Repository<AlarmDevice>;

  constructor() {
    this.repository = AppDataSource.getRepository(AlarmDevice);
  }

  async create(alarmDevice: CreateAlarmDeviceDTO): Promise<AlarmDevice> {
    const alarmDeviceEntity = this.repository.create(alarmDevice);
    return this.repository.save(alarmDeviceEntity);
  }
}

export { AlarmDeviceRepository };
