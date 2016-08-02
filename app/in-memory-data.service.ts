export class InMemoryDataService {
	createDb() {
		let ROUTE_PARTS = [
			{ departureTime: '18:56', arrivalTime: '18:59', duration: '00:03:02', from: 'Point A', to: 'Point B', mode: 'foot' },
			{ departureTime: '18:59', arrivalTime: '19:05', duration: '00:06:00', from: 'Point B', to: 'Point C', mode: 'tube' },
			{ departureTime: '19:05', arrivalTime: '19:07', duration: '00:02:00', from: 'Point C', to: 'Point D', mode: 'foot' },
			{ departureTime: '19:07', arrivalTime: '19:14', duration: '00:07:00', from: 'Point D', to: 'Point E', mode: 'bus' },
			{ departureTime: '19:14', arrivalTime: '19:19', duration: '00:05:04', from: 'Point E', to: 'Point F', mode: 'foot' }
		];
		let ROUTE_PARTS_REV = [
			{ departureTime: '19:14', arrivalTime: '19:19', duration: '00:05:04', from: 'Point E', to: 'Point F', mode: 'foot' },
			{ departureTime: '19:07', arrivalTime: '19:14', duration: '00:07:00', from: 'Point D', to: 'Point E', mode: 'bus' },
			{ departureTime: '19:05', arrivalTime: '19:07', duration: '00:02:00', from: 'Point C', to: 'Point D', mode: 'foot' },
			{ departureTime: '18:59', arrivalTime: '19:05', duration: '00:06:00', from: 'Point B', to: 'Point C', mode: 'tube' },
			{ departureTime: '18:56', arrivalTime: '18:59', duration: '00:03:02', from: 'Point A', to: 'Point B', mode: 'foot' }
		]
		let routes = [
			{ departureTime: '18:56', arrivalTime: '19:20', duration: '00:24:10', routeParts: ROUTE_PARTS },
			{ departureTime: '18:52', arrivalTime: '19:16', duration: '00:24:20', routeParts: ROUTE_PARTS_REV },
			{ departureTime: '18:54', arrivalTime: '19:19', duration: '00:25:00', routeParts: ROUTE_PARTS },
			{ departureTime: '18:50', arrivalTime: '19:10', duration: '00:20:33', routeParts: ROUTE_PARTS_REV }
		];
		return {routes};
	}
}