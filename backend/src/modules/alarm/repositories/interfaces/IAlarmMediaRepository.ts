import { CreateAlarmMediaDTO } from "../../dtos/CreateAlarmMedia.DTO";
import { AlarmMedia } from "../../entities/AlarmMedia";

interface IAlarmMediaRepository {
  create(alarm: CreateAlarmMediaDTO): Promise<AlarmMedia>;
}

export { IAlarmMediaRepository };
