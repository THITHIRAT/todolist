import axios, { AxiosInstance } from "axios";

interface CreateAxiosInstanceOptions {
  timeout: number;
};

export function createAxiosInstance({
  timeout,
}: CreateAxiosInstanceOptions): AxiosInstance {
  const instance = axios.create({
    timeout,
    baseURL: "https://candidate.neversitup.com/todo",
  });
  instance.interceptors.request.use(async (config) => {
    config.baseURL = "https://candidate.neversitup.com/todo";

    const accessToken = await localStorage.getItem("user-token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });
  return instance;
}

const axiosInstance = createAxiosInstance({ timeout: 10000 });

export default axiosInstance;
