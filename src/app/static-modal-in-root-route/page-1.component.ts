import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Modal4Component } from '../dynamic-modal-with-nested-outlets/modal-4.component';
import { ActivatedRouterOutletService } from '../activated-router-outlet.service';
import { Modal1Component } from './modal-1.component';
import { ModalService } from '../modal.service';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        Modal1Component,
    ],
    providers: [
        ActivatedRouterOutletService,
        ModalService,
    ],
    selector: 'app-page-1',
    template: `
        <h2 class="text-lg font-bold mb-6">
            Home Page
        </h2>

        <button
            class="flex items-center px-4 py-2 mb-4 bg-blue-600 text-neutral-50"
            [routerLink]="[getUrl(), {outlets: {'modal-1': ['view-1']}}]"
            (click)="modal.show()"
        >
            Open Modal 1
        </button>

        <button
            class="flex items-center px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="[getUrl(), {outlets: {'modal-4': ['view-1']}}]"
            (click)="showModal4()"
        >
            Open Modal 4
        </button>

        <app-modal-1 #modal></app-modal-1>
    `,
})

export class Page1Component implements AfterViewInit {

    @ViewChild(Modal1Component) private readonly _modalEl?: Modal1Component;

    constructor(
        private readonly _activeOutlet: ActivatedRouterOutletService,
        private readonly _modal: ModalService,
    ) {
    }

    ngAfterViewInit(): void {
        if (this._activeOutlet.hasOutlet('modal-1')) {
            this._modalEl?.show();
            return;
        }

        if (this._activeOutlet.hasOutlet('modal-4')) {
            this._modal.showModal(Modal4Component);
        }
    }

    showModal4(): void {
        this._modal.showModal(Modal4Component);
    }

    getUrl(): string {
        return this._activeOutlet.getUrlWithoutOutlet();
    }

}
