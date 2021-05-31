import { APIGet } from 'src/api/communicator';

const dataId = 'how-it-works';
const versionCheckURL = `info-grids/?filter[name]=${dataId}&fields[InfoGrid]=version`;
const fullURL = `info-grids/?filter[name]=${dataId}&include=items`;

const getData = ( url: string ): Promise<any> => {
  return new Promise((res, rej) => {
    APIGet( url )
      .then((d: any) => {
        res(d);
      })
      .catch((error) => {
        rej(error);
      });
  });
};

const fetchData = ( cacheVersion: number ): Promise<any> => {
  return new Promise((res, rej) => {
    getData( versionCheckURL )
      .then((d: any) => {
        const response = { ...d };
        response.data = response.data[0];
        const version = response.data.attributes.version;
        if ( cacheVersion && cacheVersion === version ) return res(null);
        getData( fullURL )
          .then((d: any) => {
            const response = { ...d };
            response.data = response.data[0];
            res(response);
          })
          .catch((error) => {
            rej(error);
          });
      })
      .catch((error) => {
        rej(error);
      });
  });
};

export default fetchData;
