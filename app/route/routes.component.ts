import { Component, Input } from '@angular/core';

import { 
    Route,
    RouteDetailComponent } from '../shared/index';
// Import directly from folder as a circular dependacy workaround
import { RouteService } from './route.service';

@Component({
  selector: 'routes',
  templateUrl: 'app/route/routes.component.html',
  styleUrls: ['app/route/routes.component.css'],
  directives: [RouteDetailComponent]
})
export class RoutesComponent { 
    @Input() from: string;
    @Input() to: string;

    error: any;
    loading: boolean = false;

    routes: Route[];
    selectedRoute: Route;

    constructor(private routeService: RouteService) {
    }

    getRoutes() {
        this.loading = true;
        // Clear previous values (if any).
        this.routes = undefined;
        this.selectedRoute = undefined;
        this.error = undefined;

        this.routeService.getMockRoutesWithDelay()
            .then(routes => this.routes = routes)
            .then(() => this.loading = false)
            .catch(err=>this.handleError);

        // this.routeService.getRoutes(this.from, this.to)
        //     .then(routes => this.routes = routes)
        //     .catch(err => this.handleError(err))
        //     .then(() => this.loading = false);
    }

    onSelect(route: Route) {
        this.selectedRoute = route;
    }

    private handleError(err: any) {
        console.log(err);
        this.error = err.message === 'Invalid post code' ?
            `Sorry, invalid post code` :
            `Sorry, couldn't find any route from ${this.from} to ${this.to}`
        Promise.reject;
    }
}
