import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.2:3333',
});

interface ApiError {
  _kind: string;
  status: number;
  message: string;
  messages?: string[];
}

api.interceptors.request.use(
  value => value,
  () => {
    return Promise.reject({message: 'A requisição falhou', status: 503});
  },
);

api.interceptors.response.use(
  value => value,
  error => {
    const apiError: ApiError = {
      _kind: 'ApiError',
      status: 500,
      message: 'Erro desconhecido',
    };

    if (axios.isCancel(error)) {
      apiError.message = error.message ?? 'Request canceled';
    } else if (axios.isAxiosError(error)) {
      const status: number = error.response?.status ?? 500;

      apiError.status = status;

      const responseData = error.response?.data ?? 'Erro desconhecido';

      apiError.message = Array.isArray(responseData)
        ? responseData[0].message
        : responseData.message;

      if (Array.isArray(responseData)) {
        apiError.messages = responseData;
      }
    } else if (error instanceof Error) {
      apiError.message = error.message;
    }

    console.debug(error);

    return Promise.reject<ApiError>(apiError);
  },
);

export function isApiError(error: any): error is ApiError {
  return (error as ApiError)?._kind === 'ApiError';
}
