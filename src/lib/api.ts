import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.2:3333',
});

export class ApiError extends Error {
  status: number;
  message: string;
  messages?: string[];

  constructor(
    status: number,
    message: string,
    messages: string[] | undefined = undefined,
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.messages = messages;
  }
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
    const apiError = new ApiError(500, 'Erro desconhecido');

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
