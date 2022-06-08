import { Repository } from "typeorm";

import { AppDataSource } from "../../../data-source";
import { CreateAlarmMediaDTO } from "../dtos/CreateAlarmMedia.DTO";
import { AlarmMedia } from "../entities/AlarmMedia";
import { IAlarmMediaRepository } from "./interfaces/IAlarmMediaRepository";

class AlarmMediaRepository implements IAlarmMediaRepository {
  private repository: Repository<AlarmMedia>;

  constructor() {
    this.repository = AppDataSource.getRepository(AlarmMedia);
  }

  async create(alarmMedia: CreateAlarmMediaDTO): Promise<AlarmMedia> {
    const { references_ids, ...saveData } = alarmMedia;
    const alarmMediaEntity = this.repository.create(saveData);

    alarmMediaEntity.setReferencesIds(references_ids);

    return this.repository.save(alarmMediaEntity);
  }
}

export { AlarmMediaRepository };
