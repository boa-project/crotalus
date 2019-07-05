import { AppSettingsService } from './app-settings.service';

export const AppSettingsServiceFactory = () => {
  // Create env
  const appSettings = new AppSettingsService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  const browserWindowAppSettings = browserWindow['__appSettings'] || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.

  Object.keys(browserWindowAppSettings).forEach(key => {
    if (browserWindowAppSettings.hasOwnProperty(key)) {
      appSettings[key] = window['__appSettings'][key];
    }
  });

  return appSettings;
};

export const AppSettingsServiceProvider = {
  provide: AppSettingsService,
  useFactory: AppSettingsServiceFactory,
  deps: [],
};
