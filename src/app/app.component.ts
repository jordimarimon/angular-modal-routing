import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


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
                    <li class="cursor-pointer underline text-neutral-600">
                        <a routerLink="/page-2">Go to Page 2</a>
                    </li>

                    <li class="cursor-pointer underline text-neutral-600">
                        <a routerLink="/page-3">Go to Page 3</a>
                    </li>
                </ul>
            </nav>

            <router-outlet></router-outlet>
        </main>


    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {



}
