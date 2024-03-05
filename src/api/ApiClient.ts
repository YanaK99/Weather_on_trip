import axios, { AxiosInstance } from "axios";

export interface RequestService extends AxiosInstance {}

/**
 * These constants should be in envs variables,
 * state it here for convenience
 */
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const KEY = "M6SCAQD7G88J8KCLTJVKPPK52";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const newConfig = {
    ...config,
    params: { key: KEY, include: "current" },
  };
  return newConfig;
});

export class ApiService {
  constructor(private requestService: RequestService) {
    this.requestService = requestService;
  }

  get = async <R = void>(
    url: string,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.get<R>(url, { params: query });
    return res.data;
  };

  post = async <R = void, B = unknown>(
    url: string,
    body?: B,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.post<R>(url, body, { params: query });
    return res.data;
  };

  put = async <R = void, B = unknown>(
    url: string,
    body?: B,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.put<R>(url, body, { params: query });
    return res.data;
  };

  delete = async <R = void>(
    url: string,
    query?: Record<string, string | number | boolean>
  ): Promise<R> => {
    const res = await this.requestService.delete<R>(url, { params: query });
    return res.data;
  };
}

export default new ApiService(axiosInstance);
