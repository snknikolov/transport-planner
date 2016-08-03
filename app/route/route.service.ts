/*
* The service uses TransportAPI. See http://www.transportapi.com
*/
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { 
    APP_KEY,
    ID, 
    ROUTES,
    Route,
    RoutePart } from '../shared/index';

@Injectable()
export class RouteService {

    // UK Postcode regex. See http://stackoverflow.com/questions/164979/uk-postcode-regex-comprehensive
    private static POST_CODE_REGEX = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;
    private static TYPE_POST_CODE = 'postcode';
    private static FORMAT = '.json';

    constructor(private http: Http) {}

    /*
    * @param from Route start point.
    * @param to Route end point.
    * Make an http request to get possible routes from `from` to `to`.
    * Returns a rejected Promise if either `from` or `to` are not a valid point.
    */
    getRoutes(from: string, to: string): Promise<Route[]> {
        to = to.replace(' ', '');
        from = from.replace(' ', '');
        
        if (this.getLocationType(to) !== 'invalid' 
            && this.getLocationType(from) !== 'invalid') {
            let url = `http://transportapi.com/v3/uk/public/journey/from/${RouteService.TYPE_POST_CODE}:${from}/to/${RouteService.TYPE_POST_CODE}:${to}.${RouteService.FORMAT}?api_key=${APP_KEY}&app_id=${ID}`;
            
            return this.http.get(url)
                        .toPromise()
                        .then(this.extractRoute)
                        .then(routes => {
                            return routes.length !== 0 ?
                                    routes :
                                    Promise.reject<Route[]>(new Error('No route found.'));
                        })
                        .catch(this.handleError);
        } else {
            return Promise.reject<Route[]>(new Error('Invalid post code'));
        }
    }

    /*
    * Extract the route from a JSON response.
    * Converts JSON response to Route objects.
    */
    private extractRoute(res: Response) {
        let body = res.json();

        return body.routes.map(r =>  {
            let route = new Route();
            route.arrivalTime = r.arrival_time;
            route.departureTime = r.departure_time;
            route.duration = r.duration;
            route.routeParts = RouteService.extractRouteParts(r.route_parts);

            return route;
        });
    }

    /*
    * Get the route parts of a full route.
    * Use static method to avoid scope issues.
    */
    private static extractRouteParts(route) {
        return route.map(rp => {
            let routePart = new RoutePart();

            routePart.departureTime = rp.departure_time;
            routePart.arrivalTime = rp.arrival_time;
            routePart.duration = rp.duration;
            routePart.from = rp.from_point_name;
            routePart.to = rp.to_point_name;
            routePart.mode = rp.mode;

            return routePart;
        });
    }

    /*
    * Get the user's query type of location.
    * Currently supports postcode location only.
    */
    private getLocationType(userInput: string): string {
        return RouteService.POST_CODE_REGEX.exec(userInput) !== null ?
                RouteService.TYPE_POST_CODE : 'invalid';
    }

    /*
    * Handle a promise error.
    */
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /*
    * Returns a mock server response. Used for testing.
    */
    getMockRoutes(): Promise<Route[]> {
        let testUrl = 'app/mock-response.json';
        return this.http.get(testUrl)
                    .toPromise()
                    .then(this.extractRoute)
                    .catch(this.handleError);
    }
}
