const {
  REACT_APP_API_URL,
  REACT_APP_IS_MOBILE_APP
} = process.env;

class EnvironmentVariables {
  static _instance: EnvironmentVariables;
  _apiBaseUrl: string;
  _isMobileApp: boolean;

  constructor() {
    this._apiBaseUrl = REACT_APP_API_URL ?
      REACT_APP_API_URL : 'https://api-staging.solefi.iguzman.com.mx/v1/';
    this._isMobileApp = REACT_APP_IS_MOBILE_APP ? true : false;
  }

  static getInstance(): EnvironmentVariables {
    if ( !EnvironmentVariables._instance ) {
      EnvironmentVariables._instance = new EnvironmentVariables;
    }
    return EnvironmentVariables._instance;
  }

  get apiBaseUrl(): string {
    return this._apiBaseUrl;
  }

  get isMobileApp(): boolean {
    return this._isMobileApp;
  }
}

export default EnvironmentVariables;
