import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { View11Component } from './view-1-1.component';
import { View12Component } from './view-1-2.component';
import { View13Component } from './view-1-3.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        View11Component,
        View12Component,
        View13Component,
    ],
    selector: 'app-static-modal-in-root-route',
    template: `
        <button
            class="px-4 py-2 bg-blue-600 text-neutral-50"
            [routerLink]="['/', {outlets: {'modal-1': ['view-1']}}]"
            (click)="dialog.show()"
        >
            Open Modal 1
        </button>

        <dialog #dialog class="shadow-lg border-4 border-blue-400">

            <section class="flex flex-col w-80 h-80">
                <button
                    class="mis-auto px-4 py-2 bg-red-600 text-neutral-50"
                    (click)="dialog.close()"
                    [routerLink]="['/', {outlets: {'modal-1': null}}]"
                >
                    Close
                </button>

                <ul class="flex items-center gap-4 mb-4">

                    <li
                        class="flex items-center px-4 -py-2"
                        [routerLink]="['/', {outlets: {'modal-1': ['view-1']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 1</button>
                    </li>

                    <li
                        class="flex items-center  px-4 -py-2"
                        [routerLink]="['/', {outlets: {'modal-1': ['view-2']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 2</button>
                    </li>

                    <li
                        class="flex items-center px-4 -py-2"
                        [routerLink]="['/', {outlets: {'modal-1': ['view-3']}}]"
                        [routerLinkActive]="['underline', 'font-bold']"
                    >
                        <button>Tab 3</button>
                    </li>

                </ul>

                <div class="p-4 flex-1 border border-neutral-200">
                    <router-outlet name="modal-1"></router-outlet>
                </div>

            </section>

        </dialog>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal1Component {

}
