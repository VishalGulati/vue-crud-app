import axios from 'axios';
import { baseURL } from '../config/apiConstants';
import errorHandler from './errorHandler';

const API = axios.create({
  baseURL: baseURL
});

/**
 * Function that returnns the headers to be passed with every http request
 */
const getHeaders = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };
};

/**
 * A function that wraps the http get call and returns Resolved or Rejected Promise
 * @param {string} endpoint - The path of URL to be requested
 */
const getReq = endpoint => {
  return API.get(endpoint, getHeaders())
    .then(response => response)
    .catch(error => errorHandler(error));
};

/**
 * A function that wraps the http post call and returns Resolved or Rejected Promise
 * @param {string} endpoint - The path of URL to be requested
 * @param {object} payload - The data to be sent with the request
 */
const postReq = (endpoint, payload) => {
  return API.post(endpoint, payload, getHeaders())
    .then(response => response)
    .catch(error => errorHandler(error));
};

/**
 * A function that wraps the http delete call and returns Resolved or Rejected Promise
 * @param {string} endpoint - The path of URL to be requested
 */
const deleteReq = endpoint => {
  return API.delete(endpoint, getHeaders())
    .then(response => response)
    .catch(error => errorHandler(error));
};

/**
 * A function that wraps the http put call and returns Resolved or Rejected Promise
 * @param {string} endpoint - The path of URL to be requested
 * @param {object} payload - The data to be sent with the request
 */
const putReq = (endpoint, payload) => {
  return API.put(endpoint, payload, getHeaders())
    .then(response => response)
    .catch(error => errorHandler(error));
};

const api = {
  get: getReq,
  post: postReq,
  delete: deleteReq,
  put: putReq
};

export default api;
