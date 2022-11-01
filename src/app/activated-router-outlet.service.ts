import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivatedRouterOutletService {

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
    ) {
    }

    getUrlWithoutOutlet(): string {
        return this._router.url.replace(/\/\(.*?\)$/, '');
    }

    hasOutlet(name: string): boolean {
        const outletName = this._route.snapshot.children[0]?.routeConfig?.outlet ?? '';

        return outletName === name;
    }

}
