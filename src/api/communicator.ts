import axios from 'axios';
import SystemConstants from 'src/constants/EnvironmentVariables';

const sc = SystemConstants.getInstance();

export const APIGet = ( endpoint: string ): Promise<any> => {
  const url = `${sc.apiBaseUrl}${endpoint}`;
  return new Promise((res, rej) => {
    axios.get(url)
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        return rej(error);
      });
  });
};

export const APIPost = ( endpoint: string, data: any ): Promise<any> => {
  const url = `${sc.apiBaseUrl}${endpoint}`;
  return new Promise((res, rej) => {
    axios.post(url, data)
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        return rej(error);
      });
  });
};
