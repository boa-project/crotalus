
(function (window) {
  window.__appSettings = window.__appSettings || {};

  window.__appSettings.apiUri = 'https://boa.domain/api';

  window.__appSettings.catalogues = [
    { name: 'Catalogue name', key: 'catalogue-key' }
  ];

  window.__appSettings.filters = [
    { meta: 'metadata.technical.format', value: ['image', 'video'] }
  ];

  window.__appSettings.options = {
    resultsResponseSize: 50,
    minLetters: 3,
    cacheLife: 60000,
  };

  window.__appSettings.siteDescription = '';

  window.__appSettings.companyLogoFileName = '';

  window.__appSettings.aboutInfo = '';

}(this));
