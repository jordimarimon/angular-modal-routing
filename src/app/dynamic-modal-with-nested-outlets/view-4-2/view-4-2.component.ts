import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-4-2',
    template: `
        <div class="w-full h-full">
            <h1>View 4-2</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View42Component {



}
