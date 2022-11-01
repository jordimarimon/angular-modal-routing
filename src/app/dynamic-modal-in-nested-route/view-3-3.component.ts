import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-3-3',
    template: `
        <div class="w-full h-full bg-indigo-200">
            <h1>View 3-3</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View33Component {



}
