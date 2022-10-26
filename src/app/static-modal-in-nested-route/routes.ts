
import { Route } from '@angular/router';

import { Modal2Component } from './modal-2.component';
import { View21Component } from './view-2-1.component';
import { View22Component } from './view-2-2.component';
import { View23Component } from './view-2-3.component';


export const ROUTES: Route[] = [
    {
        path: '',
        component: Modal2Component,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-2',
                component: View21Component,
            },

            {
                path: 'view-2',
                outlet: 'modal-2',
                component: View22Component,
            },

            {
                path: 'view-3',
                outlet: 'modal-2',
                component: View23Component,
            },
        ],
    },
];
