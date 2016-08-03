import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoutesComponent } from '../shared/index';

@Component({
    selector: 'route-form',
    templateUrl: 'app/route-form/route-form.component.html',
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