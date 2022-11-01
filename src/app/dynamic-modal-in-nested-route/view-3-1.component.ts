import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-3-1',
    template: `
        <div class="w-full h-full bg-teal-200">
            <h1>View 3-1</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View31Component {



}
