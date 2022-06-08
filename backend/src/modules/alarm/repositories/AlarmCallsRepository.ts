import { Repository } from "typeorm";

import { AppDataSource } from "../../../data-source";
import { CreateAlarmCallsDTO } from "../dtos/CreateAlarmCalls.DTO";
import { AlarmCalls } from "../entities/AlarmCalls";
import { IAlarmCallsRepository } from "./interfaces/IAlarmCallsRepository";

class AlarmCallsRepository implements IAlarmCallsRepository {
  private repository: Repository<AlarmCalls>;

  constructor() {
    this.repository = AppDataSource.getRepository(AlarmCalls);
  }

  async create(alarmCall: CreateAlarmCallsDTO): Promise<AlarmCalls> {
    const alarmEntity = this.repository.create(alarmCall);
    return this.repository.save(alarmEntity);
  }

  async getLastByAlarm(alarmUuid: string): Promise<AlarmCalls> {
    const alarms = await this.repository.findOne({
      where: {
        alarmUuid,
      },
      order: {
        createdAt: "DESC",
      },
    });

    return alarms;
  }
}

export { AlarmCallsRepository };
