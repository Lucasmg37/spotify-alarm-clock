import AxiosHttp from "../infra/http/AxiosHttp";
import IMe, { IMeResponse } from "./interfaces/IMe";

class Me implements IMe {
  constructor(private httpClient = new AxiosHttp()) {}

  async get(): Promise<IMeResponse> {
    const response = await this.httpClient.get<IMeResponse>("/user/me");
    return response.data;
  }
}

export default Me;
