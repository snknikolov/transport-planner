import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoutesComponent } from './routes.component';

@Component({
	selector: 'route-form',
	templateUrl: 'app/route-form.component.html',
	directives: [RoutesComponent]
})
export class RouteFormComponent {
	@Input() from: string;
	@Input() to: string;

	@ViewChild(RoutesComponent)
	private routesComponent: RoutesComponent;

	onSubmit() {
		this.routesComponent.getRoutes();
	}
}