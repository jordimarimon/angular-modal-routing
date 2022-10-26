import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-1',
    template: `
        <div class="w-full h-full bg-amber-200">
            <h1>View 1</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View21Component {



}
