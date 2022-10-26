import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-1-2',
    template: `
        <div class="w-full h-full bg-red-200">
            <h1>View 1-2</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View12Component {



}
