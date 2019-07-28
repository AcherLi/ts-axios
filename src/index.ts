import { AxiosRequestConfig } from './types';
import { buildURL } from './helpers/url';
import xhr from './xhr';

function axios(config: AxiosRequestConfig) {
  processConfig(config);
  xhr(config);
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config);
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config;
  return buildURL(url, params);
}

export default axios
