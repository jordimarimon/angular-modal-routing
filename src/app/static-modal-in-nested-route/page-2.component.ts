import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Modal2Component } from './modal-2.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        Modal2Component,
    ],
    selector: 'app-page-2',
    template: `
        <h2 class="text-lg font-bold my-6">
            Page with modal 2
        </h2>

        <button
            class="px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="['/page-2', {outlets: {'modal-2': ['view-1']}}]"
            (click)="modal.show()"
        >
            Open Modal 2
        </button>

        <app-modal-2 #modal></app-modal-2>
    `,
})

export class Page2Component {


}
