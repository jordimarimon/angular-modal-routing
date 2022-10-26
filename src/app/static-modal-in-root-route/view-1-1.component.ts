import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-1-1',
    template: `
        <div class="w-full h-full bg-orange-200">
            <h1>View 1-1</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View11Component {



}
