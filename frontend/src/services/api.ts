import axiosInstance from "./axios";
import type { AxiosRequestConfig } from "axios";

export type ApiResponse<T> = Promise<T>;

export const get = <T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return axiosInstance.get<T>(url, config).then((res) => res.data);
};

export const post = <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return axiosInstance.post<T>(url, data, config).then((res) => res.data);
};

export const put = <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return axiosInstance.put<T>(url, data, config).then((res) => res.data);
};

export const del = <T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return axiosInstance.delete<T>(url, config).then((res) => res.data);
};
