import { Route } from '@angular/router';

import { View41Component } from './view-4-1.component';
import { Module411Component } from './module-4-1-1.component';
import { Module412Component } from './module-4-1-2.component';
import { Module413Component } from './module-4-1-3.component';


export const ROUTES: Route[] = [
    {
        path: '',
        component: View41Component,
        children: [
            {
                path: 'module-1',
                component: Module411Component,
            },

            {
                path: 'module-2',
                component: Module412Component,
            },

            {
                path: 'module-3',
                component: Module413Component,
            },

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'module-1',
            }
        ],
    },

]
