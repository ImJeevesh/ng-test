import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const BASE_URL = 'https://deckofcardsapi.com';

export const BASE_URL_TOKEN = new InjectionToken<string>('BASE_URL_TOKEN', {
  providedIn: 'root',
  factory: () => BASE_URL
});

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
