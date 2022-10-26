
import { Route } from '@angular/router';

import { Page2Component } from './page-2.component';


export const ROUTES: Route[] = [
    {
        path: '',
        component: Page2Component,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-2',
                loadComponent: () => import('./view-2-1.component').then(mod => mod.View21Component),
            },

            {
                path: 'view-2',
                outlet: 'modal-2',
                loadComponent: () => import('./view-2-2.component').then(mod => mod.View22Component),
            },

            {
                path: 'view-3',
                outlet: 'modal-2',
                loadComponent: () => import('./view-2-3.component').then(mod => mod.View23Component),
            },
        ],
    },
];
