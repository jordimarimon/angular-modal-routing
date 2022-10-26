import { Route } from '@angular/router';

import { Modal1Component } from './modal-1.component';
import { View11Component } from './view-1-1.component';
import { View12Component } from './view-1-2.component';
import { View13Component } from './view-1-3.component';


export const ROUTES: Route[] = [
    {
        path: '',
        component: Modal1Component,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-1',
                component: View11Component,
            },

            {
                path: 'view-2',
                outlet: 'modal-1',
                component: View12Component,
            },

            {
                path: 'view-3',
                outlet: 'modal-1',
                component: View13Component,
            },
        ],
    },
];
