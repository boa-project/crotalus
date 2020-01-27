
(function (window) {
  window.__appSettings = window.__appSettings || {};

  window.__appSettings.apiUri = 'https://boa.udea.edu.co/api';
  // window.__appSettings.apiUri = 'https://boa.udea.edu.co/api' /c/engagement/resources.json;
  // window.__appSettings.apiUri = 'https://boa.escuelacorporativa.com/api';

  window.__appSettings.catalogues = [
    { name: 'Banco de imágenes de Ruta TIC UdeA', key: 'ruta-tic' }
    // { name: 'test', key: 'engagement' }
  ];

  window.__appSettings.filters = [
    { meta: 'metadata.technical.format', value: ['image', 'video'] }
  ];

  window.__appSettings.options = {
    resultsResponseSize: 50,
    minLetters: 3,
    cacheLife: 60000,
  };

  window.__appSettings.siteDescription = 'Recursos educativos digitales abiertos - RutaTIC';

  window.__appSettings.companyLogoFileName = 'rutatic.png';

  window.__appSettings.aboutInfo = 'Crotalus permite buscar y obtener los recursos multimediales producidos en el proyecto de investigación RutaTIC y que están a disposición de la comunidad bajo licencia Creative Commons, para que la comunidad puedan hacer uso de ellos en sus proyectos.';

}(this));

