import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { View21Component } from './view-2-1.component';
import { View22Component } from './view-2-2.component';
import { View23Component } from './view-2-3.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        View21Component,
        View22Component,
        View23Component,
    ],
    selector: 'app-static-modal-in-root-route',
    template: `
        <h2 class="text-lg font-bold my-6">
            Page with modal 2
        </h2>

        <button
            class="px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="['/page-2', {outlets: {'modal-2': ['view-1']}}]"
            (click)="dialog.show()"
        >
            Open Modal 2
        </button>

        <dialog #dialog class="shadow-lg border-4 border-blue-400">

            <section class="flex flex-col w-80 h-80">
                <button
                    class="mis-auto px-4 py-2 bg-red-600 text-neutral-50"
                    (click)="dialog.close()"
                    [routerLink]="['/page-2', {outlets: {'modal-2': null}}]"
                >
                    Close
                </button>

                <ul class="flex items-center gap-4 mb-4">

                    <li
                        class="flex items-center px-4 -py-2"
                        [routerLink]="['/page-2', {outlets: {'modal-2': ['view-1']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 1</button>
                    </li>

                    <li
                        class="flex items-center  px-4 -py-2"
                        [routerLink]="['/page-2', {outlets: {'modal-2': ['view-2']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 2</button>
                    </li>

                    <li
                        class="flex items-center px-4 -py-2"
                        [routerLink]="['/page-2', {outlets: {'modal-2': ['view-3']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 3</button>
                    </li>

                </ul>

                <div class="p-4 flex-1 border border-neutral-200">
                    <router-outlet name="modal-2"></router-outlet>
                </div>

            </section>

        </dialog>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal2Component {

}
