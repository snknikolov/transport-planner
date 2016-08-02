/*
	This class represents a route from start point to end point.
	It consists of intermediate parts @param {RoutePart[]} routeParts.
*/
import { RoutePart } from './route-part';

export class Route {
	//@JsonProperty('arrival_time')
	departureTime: string;
	arrivalTime: string;
	duration: string;
	routeParts: RoutePart[];
}
