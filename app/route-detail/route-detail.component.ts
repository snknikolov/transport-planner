import { Component, Input, OnDestroy } from '@angular/core';

import { Route, RoutePart } from '../shared/index';

@Component({
    selector: 'route-detail',
    templateUrl: 'app/route-detail/route-detail.component.html',
    styleUrls: ['app/route-detail/route-detail.component.css']
})
export class RouteDetailComponent {
    @Input() route: Route;

    /*
    * Select a font-awesome icon class based on the route mode.
    */
    selectIconClass(routePartMode: string): string {
        switch (routePartMode) {
            case 'foot': return 'fa-odnoklassniki'; // No "walk" icon in font-awesome yet.
            case 'tube': return 'fa-subway';
            case 'train': return 'fa-train';
            case 'bus': return 'fa-bus';
            case 'boat': return 'fa-ship';
            default: return ''; // Should not get here.
        }
    }

    /*
    * Select a human-readable representation of mode.
    */
    selectMessage(routePart: RoutePart): string {
        let msg = `${routePart.line} to ${routePart.to}.`;
        switch(routePart.mode) {
            case 'foot': return `Walk to ${routePart.to}.`;
            case 'tube': return `Tube, line ${msg}`;
            case 'train': return `Train, line ${msg}`;
            case 'bus': return `Bus ${msg}`;
            case 'boat': return `Boat ${msg}`;
            default: return 'Go to'; // Should not get here.
        }
    }
}
