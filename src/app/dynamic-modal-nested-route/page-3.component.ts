import { RouterModule } from '@angular/router';
import {
    ApplicationRef,
    Component,
    createComponent,
    EmbeddedViewRef,
    EnvironmentInjector,
    Injector,
    StaticProvider,
} from '@angular/core';

import { Modal3Component, OVERLAY_REF } from './modal-3.component';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    selector: 'app-page-3',
    template: `
        <h2 class="text-lg font-bold my-6">
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
        private _environmentInjector: EnvironmentInjector,
        private readonly _defaultInjector: Injector,
        private readonly _appRef: ApplicationRef,
    ) {
    }

    show(): void {
        const dialog = document.createElement('dialog');
        const providers: StaticProvider[] = [
            {
                provide: OVERLAY_REF,
                useValue: dialog,
            }
        ];

        const injector = Injector.create({
            parent: this._defaultInjector,
            providers,
        });

        const componentRef = createComponent(Modal3Component, {
            environmentInjector: this._environmentInjector,
            elementInjector: injector,
        });

        const viewRef = componentRef.hostView as EmbeddedViewRef<unknown>;

        this._appRef.attachView(viewRef);

        componentRef.changeDetectorRef.reattach();

        const nodes = viewRef.rootNodes;
        const fragment = document.createDocumentFragment();

        for (const node of nodes) {
            fragment.appendChild(node);
        }

        dialog.appendChild(fragment);
        dialog.classList.add('shadow-lg', 'border-4', 'border-blue-400');
        document.body.appendChild(dialog);

        dialog.show();
    }

}
