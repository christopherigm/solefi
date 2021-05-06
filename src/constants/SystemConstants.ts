class SystemConstants {
  static _instance: SystemConstants;
  _apiBaseUrl: string;

  constructor() {
    this._apiBaseUrl = process.env.API_BASE_URL ?
      process.env.API_BASE_URL : 'https://api-staging.solefi.iguzman.com.mx/v1/';
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
