
(function (window) {
  window.__appSettings = window.__appSettings || {};

  window.__appSettings.repositories = [
    {
      "name": "UdeA",
      "api": "https://boa.udea.edu.co/api/",
      "version": 1.1,
      "catalogs": [
          {
              "key": "ruta-tic",
              "title": "RutaTIC",
              "access": "public",
              "available": true
          }
      ]
  }
  ]

  window.__appSettings.options = {
    resultsResponseSize: 10,
    minLetters: 3,
  };

  window.__appSettings.siteDescription = 'Recursos educativos digitales abiertos - RutaTIC';

  window.__appSettings.companyLogoFileName = 'rutatic.png';

  window.__appSettings.aboutInfo = 'Crotalus permite buscar y obtener los recursos multimediales producidos en el proyecto de investigación RutaTIC y que están a disposición de la comunidad bajo licencia Creative Commons, para que la comunidad puedan hacer uso de ellos en sus proyectos.';

}(this));
