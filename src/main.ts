import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, UrlSerializer } from '@angular/router';

import { CustomUrlSerializer } from './app/custom-url-serializer';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/routes';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
        { provide: UrlSerializer, useClass: CustomUrlSerializer },
    ],
}).catch(err => console.error(err));
