import { Component, Input } from '@angular/core';

import { 
	Route,
	RouteDetailComponent } from '../shared/index';
// Import directly from folder as a circular dependacy workaround
import { RouteService } from './route.service'; 

@Component({
  selector: 'routes',
  templateUrl: 'app/route/routes.component.html',
  directives: [RouteDetailComponent]
})
export class RoutesComponent { 
	@Input() from: string;
	@Input() to: string;

	routes: Route[];
	selectedRoute: Route;

	constructor(private routeService: RouteService) {
	}

	getRoutes() {
		// this.routeService.getRoutes(this.to, this.from)
		// 	.then(routes => this.routes = routes);
		this.routeService.getMockRoutes()
			.then(routes => this.routes = routes);
	}

	onSelect(route: Route) {
		this.selectedRoute = route;
	}
}
