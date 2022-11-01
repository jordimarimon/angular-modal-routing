import { Route } from '@angular/router';


export const ROUTES_4: Route[] = [

    {
        path: 'view-1',
        outlet: 'modal-4',
        loadComponent: () => import('./view-4-1/view-4-1.component').then(mod => mod.View41Component),
    },

    {
        path: 'view-2',
        outlet: 'modal-4',
        loadComponent: () => import('./view-4-2/view-4-2.component').then(mod => mod.View42Component),
    },

    {
        path: 'view-3',
        outlet: 'modal-4',
        loadComponent: () => import('./view-4-3/view-4-3.component').then(mod => mod.View43Component),
    },

];
