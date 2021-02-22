export class AppSettings {

  // The values that are defined here are the default values that can
  // be overridden by settings.js

  public repositories = [];

  public options = {
    resultsResponseSize: 20,
    minLetters: 3,
  };

  public siteDescription = '';

  public companyLogoFileName = '';

  public aboutInfo = '';


  constructor() {
  }

}
