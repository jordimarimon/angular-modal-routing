import { Route } from '@angular/router';

import { ModalComponent } from './modal.component';
import { View1Component } from './view-1.component';
import { View2Component } from './view-2.component';
import { View3Component } from './view-3.component';


export const ROUTES_1: Route[] = [
    {
        path: '',
        component: ModalComponent,
        children: [
            {
                path: 'view-1',
                outlet: 'modal-1',
                component: View1Component,
            },

            {
                path: 'view-2',
                outlet: 'modal-1',
                component: View2Component,
            },

            {
                path: 'view-3',
                outlet: 'modal-1',
                component: View3Component,
            },
        ],
    },
];
