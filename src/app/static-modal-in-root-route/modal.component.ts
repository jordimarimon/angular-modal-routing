import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { View1Component } from './view-1.component';
import { View2Component } from './view-2.component';
import { View3Component } from './view-3.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        View1Component,
        View2Component,
        View3Component,
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

        <dialog #dialog class="shadow-md border-4 border-blue-400">

            <section class="flex flex-col w-80 h-80">
                <button
                    class="mis-auto px-4 py-2 bg-red-600 text-neutral-50"
                    (click)="dialog.close()"
                    [routerLink]="['/', {outlets: {'modal-1': null}}]"
                >
                    Close
                </button>

                <ul class="flex items-center gap-4 mb-4">

                    <li class="flex items-center px-4 -py-2" [routerLink]="['/', {outlets: {'modal-1': ['view-1']}}]">
                        <button>Tab 1</button>
                    </li>

                    <li class="flex items-center  px-4 -py-2" [routerLink]="['/', {outlets: {'modal-1': ['view-2']}}]">
                        <button>Tab 2</button>
                    </li>

                    <li class="flex items-center px-4 -py-2" [routerLink]="['/', {outlets: {'modal-1': ['view-3']}}]">
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
export class ModalComponent {

}
