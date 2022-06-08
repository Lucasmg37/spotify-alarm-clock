import AxiosHttp from "../infra/http/AxiosHttp";
import IAlarm, {
  IAlarmCreateRequest,
  IAlarmCreatResponse,
} from "./interfaces/IAlarm";

class Alarm implements IAlarm {
  constructor(private httpClient = new AxiosHttp()) {}

  async create(data: IAlarmCreateRequest): Promise<IAlarmCreatResponse> {
    const response = await this.httpClient.post<
      IAlarmCreateRequest,
      IAlarmCreatResponse
    >("/alarm", data);
    return response.data;
  }
}

export default Alarm;
