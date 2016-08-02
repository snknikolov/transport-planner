import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ROUTES } from './mock-routes';
import { APP_KEY, ID } from './authentication';

import { Route } from './route';
import { RoutePart } from './route-part';

@Injectable()
export class RouteService {
	/* Authentication format
	transportapi.com/v3/uk/tube[.format]?api_key={your_api_key}&app_id={your_app_id}
	*/
	private url = `?api_key=${APP_KEY}&app_id=${ID}`;
	private testUrl = 'app/mock-response.json';

	constructor(private http: Http) {}

	getMockRoutes(): Promise<Route[]> {
		return this.http.get(this.testUrl)
					.toPromise()
					.then(this.extractRoute)
					.catch(this.handleError);
	}

	getRoutes(to: string, from: string) {
		return Promise.resolve(ROUTES);
	}

	private extractRoute(res: Response) {
		let body = res.json();

		return body.routes.map(r =>  {
			let route = new Route();
			route.arrivalTime = r.arrival_time;
			route.departureTime = r.departure_time;
			route.duration = r.duration;

			route.routeParts = r.route_parts.map(rp => {
				// TODO Use extractRouteParts
				let routePart = new RoutePart();
				routePart.departureTime = rp.departure_time;
				routePart.arrivalTime = rp.arrival_time;
				routePart.duration = rp.duration;
				routePart.from = rp.from_point_name;
				routePart.to = rp.to_point_name;
				routePart.mode = rp.mode;

				return routePart;
			});

			return route;
		});
	}

	private extractRouteParts() {
		// TODO split extractRoute
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}