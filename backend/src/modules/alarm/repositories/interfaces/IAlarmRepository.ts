import { CreateAlarmDTO } from "../../dtos/CreateAlarm.DTO";
import { Alarm } from "../../entities/Alarm";

interface IAlarmRepository {
  create(alarm: CreateAlarmDTO): Promise<Alarm>;
  getValidAlarms(): Promise<Alarm[]>;
}

export { IAlarmRepository };
