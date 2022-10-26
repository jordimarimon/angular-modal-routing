import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-2-3',
    template: `
        <div class="w-full h-full bg-green-200">
            <h1>View 2-3</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View23Component {



}
