import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RouteService } from './route.service';
import { RouteFormComponent } from './route-form.component';

@Component({
	selector: 'transport-app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES, RouteFormComponent],
	providers: [RouteService],
})
export class AppComponent {
	title = "Transport Planner";
}