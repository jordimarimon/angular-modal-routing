import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-3-2',
    template: `
        <div class="w-full h-full bg-cyan-200">
            <h1>View 3-2</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View32Component {



}
