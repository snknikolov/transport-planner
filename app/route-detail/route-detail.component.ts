import { Component, Input, OnDestroy } from '@angular/core';

import { Route } from '../shared/index';

@Component({
    selector: 'route-detail',
    templateUrl: 'app/route-detail/route-detail.component.html' 
})
export class RouteDetailComponent {
    @Input() route: Route;
}