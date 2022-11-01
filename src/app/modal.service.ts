import {
    ApplicationRef,
    createComponent,
    EmbeddedViewRef,
    EnvironmentInjector,
    Injectable,
    InjectionToken,
    Injector,
    StaticProvider,
    Type,
} from '@angular/core';


export const OVERLAY_REF = new InjectionToken('OverlayRef');

@Injectable()
export class ModalService {

    constructor(
        private _environmentInjector: EnvironmentInjector,
        private readonly _defaultInjector: Injector,
        private readonly _appRef: ApplicationRef,
    ) {
    }

    showModal<C>(component: Type<C>): void {
        const dialog = document.createElement('dialog');
        const providers: StaticProvider[] = [
            {
                provide: OVERLAY_REF,
                useValue: dialog,
            },
        ];

        const injector = Injector.create({
            parent: this._defaultInjector,
            providers,
        });

        const componentRef = createComponent(component, {
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

        dialog.showModal();
    }

}
