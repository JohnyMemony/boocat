declare var process: any;

const {API_KEY: API_AUTH_KEY, API_BASE: API_BASE_URL} = process.env;

export const API_KEY = API_AUTH_KEY;
export const API_BASE = API_BASE_URL;
export const ENDPOINTS = {
  BREEDS: 'breeds',
  IMAGES_SEARCH: 'images/search'
};
