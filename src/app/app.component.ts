import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { createRouterConfig } from './create-router-config';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    selector: 'app-root',
    template: `

        <main class="p-6">
            <h1 class="text-2xl font-bold my-6">
                Modals with routing!
            </h1>

            <nav class="flex w-full my-4">
                <ul class="flex items-center gap-4 w-full">
                    <li
                        class="cursor-pointer underline text-neutral-600"
                        routerLink="/"
                        [routerLinkActive]="['font-bold', 'text-neutral-900']"
                        [routerLinkActiveOptions]="{exact: true}"
                    >
                        <a>Go to Home</a>
                    </li>

                    <li
                        class="cursor-pointer underline text-neutral-600"
                        routerLink="/page-2"
                        [routerLinkActive]="['font-bold', 'text-neutral-900']"
                    >
                        <a>Go to Page 2</a>
                    </li>

                    <li
                        class="cursor-pointer underline text-neutral-600"
                        routerLink="/page-3"
                        [routerLinkActive]="['font-bold', 'text-neutral-900']"
                    >
                        <a>Go to Page 3</a>
                    </li>
                </ul>
            </nav>

            <section class="p-4 border border-neutral-200">
                <router-outlet></router-outlet>
            </section>
        </main>


    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {


    constructor(
        private readonly _router: Router,
    ) {
        this._router.resetConfig(createRouterConfig(this._router.config));
    }


}
