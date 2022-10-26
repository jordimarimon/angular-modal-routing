import { Component, Inject, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';


export const OVERLAY_REF = new InjectionToken('OverlayRef');

@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    selector: 'app-modal-3',
    template: `
        <section class="flex flex-col w-80 h-80">
            <button
                class="mis-auto px-4 py-2 bg-red-600 text-neutral-50"
                (click)="close()"
                [routerLink]="['/page-3', {outlets: {'modal-3': null}}]"
            >
                Close
            </button>

            <ul class="flex items-center gap-4 mb-4">

                <li
                    class="flex items-center px-4 -py-2"
                    [routerLink]="['/page-3', {outlets: {'modal-3': ['view-1']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 1</button>
                </li>

                <li
                    class="flex items-center  px-4 -py-2"
                    [routerLink]="['/page-3', {outlets: {'modal-3': ['view-2']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 2</button>
                </li>

                <li
                    class="flex items-center px-4 -py-2"
                    [routerLink]="['/page-3', {outlets: {'modal-3': ['view-3']}}]"
                    [routerLinkActive]="['underline', 'font-bold']"
                >
                    <button>Tab 3</button>
                </li>

            </ul>

            <div class="p-4 flex-1 border border-neutral-200">
                <router-outlet name="modal-3"></router-outlet>
            </div>

        </section>
    `,
})
export class Modal3Component {

    constructor(
        @Inject(OVERLAY_REF) readonly overlayRef: HTMLDialogElement,
    ) {
    }

    close(): void {
        this.overlayRef.close();
        this.overlayRef.remove();
    }

}
