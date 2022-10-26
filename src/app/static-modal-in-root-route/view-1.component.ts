import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-view-1',
    template: `
        <h1>View 1</h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class View1Component {



}
