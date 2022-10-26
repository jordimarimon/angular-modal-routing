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

            <router-outlet></router-outlet>
        </main>


    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {



}
