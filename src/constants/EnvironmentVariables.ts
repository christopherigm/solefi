const { REACT_APP_API_URL } = process.env;

class SystemConstants {
  static _instance: SystemConstants;
  _apiBaseUrl: string;

  constructor() {
    this._apiBaseUrl = REACT_APP_API_URL ?
      REACT_APP_API_URL : 'https://api-staging.solefi.iguzman.com.mx/v1/';
  }

  static getInstance(): SystemConstants {
    if ( !SystemConstants._instance ) {
      SystemConstants._instance = new SystemConstants;
    }
    return SystemConstants._instance;
  }

  get apiBaseUrl(): string {
    return this._apiBaseUrl;
  }
}

export default SystemConstants;
