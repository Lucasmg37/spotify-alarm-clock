import IHttp, { IResponse } from "./interfaces/IHttp";
import axios from "axios";

class AxiosHttp implements IHttp {
  client;

  private addInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  constructor() {
    this.client = axios.create({
      // baseURL: "https://alarm-spotify.herokuapp.com",
      baseURL: "http://localhost:3000",
    });
    this.addInterceptors();
  }

  async get<R>(
    path: string,
    queryParams?: Record<string, unknown>
  ): Promise<IResponse<R>> {
    const response = await this.client.get(path, { params: queryParams || {} });
    return { data: response.data };
  }

  async post<D, R>(
    path: string,
    data: D,
    queryParams?: Record<string, unknown>
  ): Promise<IResponse<R>> {
    const response = await this.client.post(path, data || {}, {
      params: queryParams || {},
    });
    return { data: response.data };
  }
}

export default AxiosHttp;
