import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-2',
    template: `
        <div class="w-full h-full bg-lime-200">
            <h1>View 2</h1>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View22Component {



}
