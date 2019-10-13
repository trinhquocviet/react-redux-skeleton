import axios from 'axios';
import { HTTP_TIMEOUT } from 'common/constants/env';

const httpClient = axios.create();
httpClient.defaults.timeout = HTTP_TIMEOUT;

const defaultHeaders = () => ({});

export default {
  GET: async (url, customHeaders = {}) => {
    let result = null;

    await httpClient
      .get(url, {
        headers: {
          ...defaultHeaders,
          ...customHeaders,
        },
      })
      .then((response) => {
        result = response;
        return result;
      })
      .catch((error) => {
        result = error.response;
      });

    return result;
  },

  POST: async (url, params, customHeaders = {}) => {
    let result = null;

    await httpClient
      .post(url, params, {
        headers: {
          ...defaultHeaders,
          ...customHeaders,
        },
      })
      .then((response) => {
        result = response;
        return result;
      })
      .catch((error) => {
        result = error.response;
      });

    return result;
  },

  PUT: async (url, params, customHeaders = {}) => {
    let result = null;

    await httpClient
      .put(url, params, {
        headers: {
          ...defaultHeaders,
          ...customHeaders,
        },
      })
      .then((response) => {
        result = response;
        return result;
      })
      .catch((error) => {
        result = error.response;
      });

    return result;
  },

  PATCH: async (url, params, customHeaders = {}) => {
    let result = null;

    await httpClient
      .patch(url, params, {
        headers: {
          ...defaultHeaders,
          ...customHeaders,
        },
      })
      .then((response) => {
        result = response;
        return result;
      })
      .catch((error) => {
        result = error.response;
      });

    return result;
  },

  DELETE: async (url, customHeaders = {}) => {
    let result = null;

    await httpClient
      .delete(url, {
        headers: {
          ...defaultHeaders,
          ...customHeaders,
        },
      })
      .then((response) => {
        result = response;
        return result;
      })
      .catch((error) => {
        result = error.response;
      });

    return result;
  },
};
