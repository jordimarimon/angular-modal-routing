import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Modal4Component } from '../dynamic-modal-with-nested-outlets/modal-4.component';
import { ActivatedRouterOutletService } from '../activated-router-outlet.service';
import { Modal3Component } from './modal-3.component';
import { ModalService } from '../modal.service';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    providers: [
        ActivatedRouterOutletService,
        ModalService,
    ],
    selector: 'app-page-3',
    template: `
        <h2 class="text-lg font-bold mb-6">
            Page with modal 3
        </h2>

        <button
            class="flex items-center px-4 py-2 mb-4 bg-blue-600 text-neutral-50"
            [routerLink]="[getUrl(), {outlets: {'modal-3': ['view-1']}}]"
            (click)="showModal3()"
        >
            Open Modal 3
        </button>

        <button
            class="flex items-center px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="[getUrl(), {outlets: {'modal-4': ['view-1']}}]"
            (click)="showModal4()"
        >
            Open Modal 4
        </button>
    `,
})

export class Page3Component implements AfterViewInit {

    constructor(
        private readonly _activeOutlet: ActivatedRouterOutletService,
        private readonly _modal: ModalService,
    ) {
    }

    ngAfterViewInit(): void {
        if (this._activeOutlet.hasOutlet('modal-3')) {
            this.showModal3();
            return;
        }

        if (this._activeOutlet.hasOutlet('modal-4')) {
            this.showModal4();
        }
    }

    showModal3(): void {
        this._modal.showModal(Modal3Component);
    }

    showModal4(): void {
        this._modal.showModal(Modal4Component);
    }

    getUrl(): string {
        return this._activeOutlet.getUrlWithoutOutlet();
    }

}
