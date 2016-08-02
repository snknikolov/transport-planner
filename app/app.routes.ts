/*
	Angular routes configuration file.
	Not to be confused with routes recieved by TransportAPI.
*/

import { provideRouter, RouterConfig } from '@angular/router';

import { RouteFormComponent } from './shared/index';

const routes: RouterConfig = [
	{
		path: '',
		component: RouteFormComponent
	}
];

export const appRouterProviders = [
	provideRouter(routes)
]