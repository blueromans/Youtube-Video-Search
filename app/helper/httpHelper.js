import instance from './axios';

const post = (endpoint, credentials = null) => {
  return instance.post(endpoint, credentials);
};

const put = (endpoint, credentials = null) => {
  return instance.put(endpoint, credentials);
};

const get = (endpoint, credentials = null) => {
  const url = credentials ? `${endpoint}?${credentials}` : endpoint;
  return instance.get(url);
};
export {get, post, put};
