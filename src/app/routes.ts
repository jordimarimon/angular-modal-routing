import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./static-modal-in-root-route/routes').then(mod => mod.ROUTES_1),
    },

];
