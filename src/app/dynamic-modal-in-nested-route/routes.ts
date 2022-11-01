import { Route } from '@angular/router';

import { Page3Component } from './page-3.component';


export const ROUTES: Route[] = [

    {
        path: '',
        component: Page3Component,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-3',
                loadComponent: () => import('./view-3-1.component').then(mod => mod.View31Component),
            },

            {
                path: 'view-2',
                outlet: 'modal-3',
                loadComponent: () => import('./view-3-2.component').then(mod => mod.View32Component),
            },

            {
                path: 'view-3',
                outlet: 'modal-3',
                loadComponent: () => import('./view-3-3.component').then(mod => mod.View33Component),
            },
        ],
    },

];
