(function (window) {
  window.__appSettings = window.__appSettings || {};

  // window.__appSettings.apiUri = 'https://boa.udem.edu.co/api';
  window.__appSettings.apiUri = 'https://boa.udea.edu.co/api';

  window.__appSettings.catalogues = [
    // { name: 'Banco de videos educativos de la UdeM', key: 'udem' }
    { name: 'Banco de videos educativos de la UdeM', key: 'ruta-tic' }
  ];

  window.__appSettings.filters = [
    { meta: 'metadata.technical.format', value: ['image'] }
  ];

  window.__appSettings.options = {
    resultsResponseSize: 50,
    minLetters: 3,
    cacheLife: 60000,
  };

  window.__appSettings.debug = true;
}(this));
