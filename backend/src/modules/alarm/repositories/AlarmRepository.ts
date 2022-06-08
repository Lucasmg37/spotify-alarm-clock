import { Repository } from "typeorm";

import { AppDataSource } from "../../../data-source";
import { CreateAlarmDTO } from "../dtos/CreateAlarm.DTO";
import { Alarm } from "../entities/Alarm";
import { IAlarmRepository } from "./interfaces/IAlarmRepository";

class AlarmRepository implements IAlarmRepository {
  private repository: Repository<Alarm>;

  constructor() {
    this.repository = AppDataSource.getRepository(Alarm);
  }

  async create(alarm: CreateAlarmDTO): Promise<Alarm> {
    const { weekDays, ...alarmData } = alarm;

    const alarmEntity = this.repository.create({
      ...alarmData,
    });

    alarmEntity.setWeekDays(weekDays);
    return this.repository.save(alarmEntity);
  }

  async getValidAlarms(): Promise<Alarm[]> {
    const alarms = await this.repository.find({
      where: {
        active: true,
      },
      relations: ["alarmMedia", "alarmDevice"],
    });

    return alarms;
  }
}

export { AlarmRepository };
