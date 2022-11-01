import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/routes';


if (environment.production) {
  enableProdMode();
}

const providers = [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES, {
        preloadingStrategy: PreloadAllModules,
    })),

    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
    },

    {
        provide: APP_BASE_HREF,
        useValue: environment.production ? '/' : '/angular-modal-routing/',
    },
];

bootstrapApplication(AppComponent, {providers}).catch(err => console.error(err));
