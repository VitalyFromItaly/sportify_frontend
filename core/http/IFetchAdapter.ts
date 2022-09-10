export interface IFetchAdapter {
  get(url: string, isSilent?: boolean, config?: any): Promise<Response | null>;
  post(url: string, body?: any, isSilent?: boolean, config?: any): Promise<Response | null>;
  request(url: string, method: string, body?: any, isSilent?: boolean, config?: any): Promise<Response | null>;
}
