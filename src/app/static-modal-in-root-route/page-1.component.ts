import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Modal1Component } from './modal-1.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        Modal1Component,
    ],
    selector: 'app-page-1',
    template: `
        <h2 class="text-lg font-bold mb-6">
            Home Page
        </h2>

        <button
            class="px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="['/', {outlets: {'modal-1': ['view-1']}}]"
            (click)="modal.show()"
        >
            Open Modal 1
        </button>

        <app-modal-1 #modal></app-modal-1>
    `,
})

export class Page1Component {


}
