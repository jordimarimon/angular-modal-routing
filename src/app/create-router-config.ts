import { Route } from '@angular/router';

import { ROUTES_4 } from './dynamic-modal-with-nested-outlets/routes';


export function createRouterConfig(oldConfig: Route[]): Route[] {
    const newConfig: Route[] = [];

    for (const route of oldConfig) {
        newConfig.push(addRoutes(route, ROUTES_4));
    }

    return newConfig;
}

function addRoutes(route: Route, newRoutes: Route[]): Route {
    const newRoute: Route = {
        ...route,
    };

    if (route.loadChildren) {
        newRoute.loadChildren = async () => {
            const childRoutes = await (route.loadChildren as () => Promise<Route[]>)();

            return childRoutes.map(r => addRoutes(r, newRoutes));
        };
    } else {
        newRoute.children = [
            ...(route.children ?? []),
            ...ROUTES_4,
        ];
    }

    return newRoute;
}
