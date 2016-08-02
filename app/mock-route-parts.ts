import { RoutePart } from './route-part';

export const ROUTE_PARTS: RoutePart[] = [
	{ departureTime: '18:56', arrivalTime: '18:59', duration: '00:03:02', from: 'Point A', to: 'Point B', mode: 'foot' },
	{ departureTime: '18:59', arrivalTime: '19:05', duration: '00:06:00', from: 'Point B', to: 'Point C', mode: 'tube' },
	{ departureTime: '19:05', arrivalTime: '19:07', duration: '00:02:00', from: 'Point C', to: 'Point D', mode: 'foot' },
	{ departureTime: '19:07', arrivalTime: '19:14', duration: '00:07:00', from: 'Point D', to: 'Point E', mode: 'bus' },
	{ departureTime: '19:14', arrivalTime: '19:19', duration: '00:05:04', from: 'Point E', to: 'Point F', mode: 'foot' }
];

export const ROUTE_PARTS_REV: RoutePart[] = [
	{ departureTime: '19:14', arrivalTime: '19:19', duration: '00:05:04', from: 'Point E', to: 'Point F', mode: 'foot' },
	{ departureTime: '19:07', arrivalTime: '19:14', duration: '00:07:00', from: 'Point D', to: 'Point E', mode: 'bus' },
	{ departureTime: '19:05', arrivalTime: '19:07', duration: '00:02:00', from: 'Point C', to: 'Point D', mode: 'foot' },
	{ departureTime: '18:59', arrivalTime: '19:05', duration: '00:06:00', from: 'Point B', to: 'Point C', mode: 'tube' },
	{ departureTime: '18:56', arrivalTime: '18:59', duration: '00:03:02', from: 'Point A', to: 'Point B', mode: 'foot' },
];
