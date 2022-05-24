import { CreateAlarmDeviceDTO } from "../../dtos/CreateAlarmDevice.DTO";
import { AlarmDevice } from "../../entities/AlarmDevice";

interface IAlarmDeviceRepository {
  create(alarm: CreateAlarmDeviceDTO): Promise<AlarmDevice>;
}

export { IAlarmDeviceRepository };
