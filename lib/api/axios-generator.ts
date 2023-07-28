import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import api from "./api";

export type RequestConfig = Omit<
  AxiosRequestConfig,
  "url" | "baseURL" | "data" | "method"
>;
export type WithoutDataFunction = <T = any>(
  url: string,
  config?: RequestConfig,
) => Promise<T>;
export type WithDataFunction = <T = any, D = any>(
  url: string,
  data?: D,
  config?: RequestConfig,
) => Promise<T>;

export interface AxiosInstance {
  get: WithoutDataFunction;
  delete: WithoutDataFunction;
  post: WithDataFunction;
  put: WithDataFunction;
  patch: WithDataFunction;
}

export function generateAxiosInstance(
  baseURL: string,
  withCredentials?: boolean,
): AxiosInstance {
  const client = axios.create({
    baseURL,
    withCredentials,
  });
  return {
    get: handleResponse(client.get),
    post: handleResponse(client.post),
    delete: handleResponse(client.delete),
    put: handleResponse(client.put),
    patch: handleResponse(client.patch),
  };
}

function handleResponse(
  callable: (...args: any[]) => Promise<AxiosResponse>,
  errorHandler = defaultErrorHandler,
) {
  return async (...args: any[]) => {
    let lastError = null;
    for (let i = 1; i <= 5; i++) {
      try {
        return callable(...args).then((res) => {
          return res.data;
        });
      } catch (err) {
        lastError = err;
        if (err instanceof AxiosError) {
          if (err.response?.status === 429) {
            await new Promise((resolve) => setTimeout(resolve, 1000 * i));
            continue;
          }
        }
        return errorHandler(err);
      }
    }
    return errorHandler(lastError);
  };
}

const defaultErrorHandler = async (err: any) => {
  if (err instanceof AxiosError) {
    switch (err.response?.status) {
      case 401:
        if (
          window.location.pathname !== "/login" &&
          window.location.pathname !== "/register" &&
          window.location.pathname !== "/" &&
          window.location.pathname !== "/basket-battle"
        )
          window.location.assign("/login");
        return;
      case 404:
      case 402:
      case 409:
        break;
      case 429:
        // toast.error("잠시 후 다시 시도해주세요.");
        break;
      default:
      // await api.post("/slack/frontend", {
      //   text: `응답코드: ${err.status}\n\n > ${
      //     err.message
      //   }\n\n헤더:\n\n\`\`\`${JSON.stringify(
      //     err.response?.headers
      //   )}\`\`\`\n\n응답 데이터:\n\n\`\`\`${JSON.stringify(
      //     err.response?.data ?? null
      //   )}\`\`\`\n\n---STACK TRACE---\n\n\`\`\`${JSON.stringify(
      //     err.stack ?? null
      //   )}\`\`\`\n\n\`\`\`${JSON.stringify(err.config)}\`\`\`
      //     `,
      // });
      // const errorMessage = err.response?.data?.message;
      // if (!errorMessage && !["443", "80"].includes(window.location.port))
      //   toast.error("알 수 없는 에러 발생");
      // else {
      //     toast.error(errorMessage)};
      // }
    }
    throw err;
  }
};
