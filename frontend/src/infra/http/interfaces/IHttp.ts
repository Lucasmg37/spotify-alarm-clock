export interface IResponse<R> {
  data: R;
}

interface IHttp {
  get<R>(
    path: string,
    queryParams: Record<string, undefined>
  ): Promise<IResponse<R>>;

  post<D, R>(
    path: string,
    data: D,
    queryParams?: Record<string, undefined>
  ): Promise<IResponse<R>>;
}

export default IHttp;
