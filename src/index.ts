import { AxiosRequestConfig } from './types';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/header'
import xhr from './xhr';

function axios(config: AxiosRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config;
  return transformRequest(data);
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

export default axios
