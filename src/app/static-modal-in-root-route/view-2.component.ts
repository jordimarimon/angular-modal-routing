import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-2',
    template: `
        <h1>View 2</h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View2Component {



}
