import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: process.env.API_URL
});

axiosApiInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      config.headers['Authorization'] = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

class BaseApi {
  static getRequest(url: string, options?: unknown) {
    try {
      if (options) {
        return axiosApiInstance.get(url, { ...options });
      }
      return axiosApiInstance.get(url);
    } catch (error) {
      throw error;
    }
  }
  static postRequest(url: string, data: unknown) {
    try {
      return axiosApiInstance.post(url, data);
    } catch (error) {
      throw error;
    }
  }
  static putRequest(url: string, data: unknown) {
    try {
      return axiosApiInstance.put(url, data);
    } catch (error) {
      throw error;
    }
  }
  static deleteRequest(url: string) {
    try {
      return axiosApiInstance.delete(url);
    } catch (error) {
      throw error;
    }
  }
  static patchRequest(url: string, data: unknown) {
    try {
      return axiosApiInstance.patch(url, data);
    } catch (error) {
      throw error;
    }
  }
}

export default BaseApi;
