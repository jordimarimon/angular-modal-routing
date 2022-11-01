import { Route } from '@angular/router';


export const ROUTES_4: Route[] = [

    {
        path: 'view-1',
        outlet: 'modal-4',
        loadChildren: () => import('./view-4-1/routes').then(mod => mod.ROUTES),
    },

    {
        path: 'view-2',
        outlet: 'modal-4',
        loadChildren: () => import('./view-4-2/routes').then(mod => mod.ROUTES),
    },

    {
        path: 'view-3',
        outlet: 'modal-4',
        loadChildren: () => import('./view-4-3/routes').then(mod => mod.ROUTES),
    },

];
