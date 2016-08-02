import { Component, Input } from '@angular/core';

import { Route } from './route';

@Component({
	selector: 'route-detail',
	templateUrl: 'app/route-detail.component.html' 
})
export class RouteDetailComponent {
	@Input() route: Route;
}