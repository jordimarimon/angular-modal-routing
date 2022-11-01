import { Route } from '@angular/router';

import { View43Component } from './view-4-3.component';
import { Module431Component } from './module-4-3-1.component';
import { Module432Component } from './module-4-3-2.component';
import { Module433Component } from './module-4-3-3.component';


export const ROUTES: Route[] = [

    {
        path: '',
        component: View43Component,
        children: [
            {
                path: 'module-1',
                component: Module431Component,
            },

            {
                path: 'module-2',
                component: Module432Component,
            },

            {
                path: 'module-3',
                component: Module433Component,
            },

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'module-1',
            },
        ],
    },

];
