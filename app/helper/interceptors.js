import instance from './axios';

const API_KEYS = [
  'AIzaSyCf0IPMZutamZPDVOm3o_3WpOaOjBWZOGQ',
  'AIzaSyCQ9YV_rlkbvY9zKqtZnSYOi7_9yBYKhFk',
  'AIzaSyAhwQW5EukD5uKzzti15HeYy3r9-cepGRs',
  'AIzaSyDPpcAlRFuld42DrZolDCM8O-a4ronZfMI',
  'AIzaSyA1HxWDYZLjncH59_8TCBciaQ5xZHIWap4',
  'AIzaSyBDzf7VPmGH1N0K1_pHWa2BrfYG27eyBPs',
  'AIzaSyCnnipOcC-S8ZXFnVUHr8ILGR0sZ19bZKg',
  'AIzaSyAIsRdlRq4hmUw4nlE-aGVIPFqnyAjIzSY',
  'AIzaSyDMuLRF0tnI35Vus63WDOjCiWsWy3Dvb4E',
  'AIzaSyDot3y1ZaRuS-Z3WER-uotyY8xYgQaltJA',
  'AIzaSyCP4O8mxkr92ZJvT26q38b2ApUMwgq7iCs',
  'AIzaSyBojgNGedR_gUwBLiGa42cDkCzWTz6OPyw',
  'AIzaSyDYvAc7kz4nHTqRRtB9KPp1Quu8oABvBKw',
  'AIzaSyCR7Eo4rH_iwOFwSOJ8u8JCPycDw3FnkKY',
  'AIzaSyB1_JDfFHkgi_203fhMa1SEftbSqKvX50Y',
  'AIzaSyC5HceVRBzZM_zcKfRfCHiCOXN16_4xN30',
  'AIzaSyBF21Er1yZDEosGc5ZXZhoSgahYW5wcoK8',
  'AIzaSyBTqMc9m1D1SyZIi_R2hQKstPSdLS1h6Kk',
  'AIzaSyBAq1J12mnAmJgSfu4P1GE1G5XQTIsSce8',
  'AIzaSyDF_Jlk-NPao00Mv9lf8h6FzLpmT8ROMHk',
  'AIzaSyBIXjORxCx8GmVLYfy_HHYhl-Qic3Kad_A',
  'AIzaSyAFjXf3LKuKozA9iodnxwLpKA9vWSE8gqU',
];
const updateQueryStringParameter = (uri, key, value) => {
  const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    return uri + separator + key + '=' + value;
  }
};
const requestHandler = async config => {
  config.url =
    config.url +
    '&key=' +
    API_KEYS[Math.floor(Math.random() * API_KEYS.length)];
  return config;
};
const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = async error => {
  if (error.response) {
    const {
      config,
      response: {status},
    } = error;
    const originalRequest = config;
    if (status === 403) {
      originalRequest.url = updateQueryStringParameter(
        originalRequest.url,
        'key',
        API_KEYS[Math.floor(Math.random() * API_KEYS.length)],
      );
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
};

const errorHandler = async error => {
  return Promise.reject(error);
};
export {
  requestHandler,
  errorHandler,
  responseSuccessHandler,
  responseErrorHandler,
};
