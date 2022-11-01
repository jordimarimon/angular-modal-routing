import { Route } from '@angular/router';

import { View42Component } from './view-4-2.component';
import { Module421Component } from './module-4-2-1.component';
import { Module422Component } from './module-4-2-2.component';
import { Module423Component } from './module-4-2-3.component';


export const ROUTES: Route[] = [

    {
        path: '',
        component: View42Component,
        children: [
            {
                path: 'module-1',
                component: Module421Component,
            },

            {
                path: 'module-2',
                component: Module422Component,
            },

            {
                path: 'module-3',
                component: Module423Component,
            },

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'module-1',
            },

        ],
    },

];
