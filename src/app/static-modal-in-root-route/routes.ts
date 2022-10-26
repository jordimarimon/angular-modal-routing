import { Route } from '@angular/router';

import { Page1Component } from './page-1.component';


export const ROUTES: Route[] = [
    {
        path: '',
        component: Page1Component,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-1',
                loadComponent: () => import('./view-1-1.component').then(mod => mod.View11Component),
            },

            {
                path: 'view-2',
                outlet: 'modal-1',
                loadComponent: () => import('./view-1-2.component').then(mod => mod.View12Component),
            },

            {
                path: 'view-3',
                outlet: 'modal-1',
                loadComponent: () => import('./view-1-3.component').then(mod => mod.View13Component),
            },
        ],
    },
];
