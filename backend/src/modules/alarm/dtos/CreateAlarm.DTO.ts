import { AlarmDevice } from "../entities/AlarmDevice";
import { AlarmMedia } from "../entities/AlarmMedia";

class CreateAlarmDTO {
  uuid?: string;
  userUuid: string;
  name: string;
  time: string;
  repeat: boolean;
  weekDays: string[];
  endAt: Date | null;
  active: boolean;
  alarmMedia: AlarmMedia;
  alarmDevice: AlarmDevice;
}

export { CreateAlarmDTO };
