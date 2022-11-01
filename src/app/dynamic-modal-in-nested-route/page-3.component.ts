import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { Modal3Component } from './modal-3.component';
import { ModalService } from '../modal.service';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    providers: [
        ModalService,
    ],
    selector: 'app-page-3',
    template: `
        <h2 class="text-lg font-bold mb-6">
            Page with modal 3
        </h2>

        <button
            class="px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="['/page-3', {outlets: {'modal-3': ['view-1']}}]"
            (click)="show()"
        >
            Open Modal 3
        </button>
    `,
})

export class Page3Component {

    constructor(
        private readonly _modal: ModalService,
    ) {
    }

    show(): void {
        this._modal.showModal(Modal3Component);
    }

}
