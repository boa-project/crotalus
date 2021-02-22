(function (window) {
  window.__appSettings = window.__appSettings || {};

  window.__appSettings.repositories = [
    {
      "name": "Repository name",
      "api": "'https://boa.domain/api",
      "version": 1.1,
      "catalogs": [
        {
          "key": "catalog-key",
          "title": "catalog title",
          "access": "public",
          "available": true
        }
      ]
    }
  ];


  window.__appSettings.options = {
    resultsResponseSize: 20,
    minLetters: 3,
  };

  window.__appSettings.siteDescription = '';

  window.__appSettings.companyLogoFileName = '';

  window.__appSettings.aboutInfo = '';


}(this));
