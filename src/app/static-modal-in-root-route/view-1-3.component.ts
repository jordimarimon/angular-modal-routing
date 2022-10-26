import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-1-3',
    template: `
        <div class="w-full h-full bg-blue-200">
            <h1>View 1-3</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View13Component {



}
