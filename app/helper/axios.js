import axios from 'axios';
import {
  errorHandler,
  requestHandler,
  responseErrorHandler,
  responseSuccessHandler,
} from '.';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

instance.interceptors.request.use(
  config => requestHandler(config),
  error => errorHandler(error),
);
instance.interceptors.response.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error),
);
export default instance;
