import { TypeSearchSpotify } from "../../common/interfaces/TypeSearchSpotify";
import { WeekDays } from "../../common/interfaces/WeekDays";

export interface IAlarmCreatResponse {}

export interface IAlarmCreateRequest {
  name: string;
  time: string;
  nameDevice: string;
  idDevice: string;
  idsMedia: string[];
  mediaType: TypeSearchSpotify;
  weekDays: WeekDays[];
  repeat: boolean;
}

interface IAlarm {
  create(data: IAlarmCreateRequest): Promise<IAlarmCreatResponse>;
}

export default IAlarm;
