import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    standalone: true,
    imports: [
        RouterModule,
    ],
    selector: 'app-view-4-3',
    template: `
        <div class="flex gap-4">
            <ul class="flex flex-col gap-4">
                <li
                    class="cursor-pointer underline text-neutral-600"
                    routerLink="./module-1"
                    [routerLinkActive]="['font-bold', 'text-neutral-900']"
                >
                    <a>Module 4-3-1</a>
                </li>
                <li
                    class="cursor-pointer underline text-neutral-600"
                    routerLink="./module-2"
                    [routerLinkActive]="['font-bold', 'text-neutral-900']"
                >
                    <a>Module 4-3-2</a>
                </li>
                <li
                    class="cursor-pointer underline text-neutral-600"
                    routerLink="./module-3"
                    [routerLinkActive]="['font-bold', 'text-neutral-900']"
                >
                    <a>Module 4-3-3</a>
                </li>
            </ul>

            <div class="p-4 flex-1 border border-neutral-200">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View43Component {

}
