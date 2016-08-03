import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RouteService, RouteFormComponent } from './shared/index';

@Component({
    selector: 'transport-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, RouteFormComponent],
    providers: [RouteService],
})
export class AppComponent {
    title = "Transport Planner";
}