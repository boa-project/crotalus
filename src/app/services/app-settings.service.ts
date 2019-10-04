export class AppSettings {

  // The values that are defined here are the default values that can
  // be overridden by settings.js

  // API url
  public apiUri = '';

  public catalogues = [
    { name: 'Banco de videos educativos de la UdeM', key: 'udem' }
  ];

  public filters = [
    { meta: 'metadata.technical.format', value: ['video', 'audio', 'image', 'text', 'application'] }
  ];

  public options = {
    resultsResponseSize: 20,
    minLetters: 3,
    cacheLife: 120000, // 120 segs
  };

  public siteDescription = '';

  public companyLogoFileName = '';

  public aboutInfo = '';


  constructor() {
  }

}
