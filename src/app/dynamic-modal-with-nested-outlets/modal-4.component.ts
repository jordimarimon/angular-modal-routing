import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ActivatedRouterOutletService } from '../activated-router-outlet.service';
import { OVERLAY_REF } from '../modal.service';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    providers: [
        ActivatedRouterOutletService,
    ],
    selector: 'app-modal-4',
    template: `
        <section class="flex flex-col w-md max-w-screen min-h-150">
            <button
                class="mis-auto px-4 py-2 bg-red-600 text-neutral-50"
                (click)="close()"
                [routerLink]="[getUrl(), {outlets: {'modal-4': null}}]"
            >
                Close
            </button>

            <ul class="flex items-center gap-4 mb-4">

                <li
                    class="flex items-center px-4 -py-2"
                    [routerLink]="[getUrl(), {outlets: {'modal-4': ['view-1']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 1</button>
                </li>

                <li
                    class="flex items-center  px-4 -py-2"
                    [routerLink]="[getUrl(), {outlets: {'modal-4': ['view-2']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 2</button>
                </li>

                <li
                    class="flex items-center px-4 -py-2"
                    [routerLink]="[getUrl(), {outlets: {'modal-4': ['view-3']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 3</button>
                </li>

            </ul>

            <div class="p-4 flex-1 border border-neutral-200">
                <router-outlet name="modal-4"></router-outlet>
            </div>

        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal4Component {

    constructor(
        @Inject(OVERLAY_REF) readonly overlayRef: HTMLDialogElement,
        private readonly _activeOutlet: ActivatedRouterOutletService,
    ) {
    }

    close(): void {
        this.overlayRef.close();
        this.overlayRef.remove();
    }

    getUrl(): string {
        return this._activeOutlet.getUrlWithoutOutlet();
    }

}
