import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [

    {
        path: '',
        loadChildren: () => import('./static-modal-in-root-route/routes').then(mod => mod.ROUTES),
    },

    {
        path: 'page-2',
        loadChildren: () => import('./static-modal-in-nested-route/routes').then(mod => mod.ROUTES),
    },

    {
        path: 'page-3',
        loadChildren: () => import('./dynamic-modal-in-nested-route/routes').then(mod => mod.ROUTES),
    },



];
