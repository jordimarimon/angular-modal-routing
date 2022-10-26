import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-3',
    template: `
        <h1>View 3</h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View3Component {



}
