import { CreateAlarmCallsDTO } from "../../dtos/CreateAlarmCalls.DTO";
import { AlarmCalls } from "../../entities/AlarmCalls";

interface IAlarmCallsRepository {
  create(alarmCall: CreateAlarmCallsDTO): Promise<AlarmCalls>;
  getLastByAlarm(alarmUuid: string): Promise<AlarmCalls>;
}

export { IAlarmCallsRepository };
