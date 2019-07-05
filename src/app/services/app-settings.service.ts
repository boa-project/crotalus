export class AppSettingsService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUri = '';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  public catalogues = [
    { name: 'Banco de videos educativos de la UdeM', key: 'udem' }
  ];

  public filters = [
    { meta: 'metadata.technical.format', value: ['video', 'audio', 'image', 'text', 'application'] }
  ];

  public options = {
    suggestionsSize: 10,
    resultsSize: 0,
    minLetters: 3,
    cacheLife: 120000, // 120 segs
  };

  public debug = false;

  constructor() {
  }

}
