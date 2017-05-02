import {Routes} from '@angular/router';
import {MapRoutes} from './pages/map/map.routes';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'schedules',
		pathMatch: 'full'
	},
	{
		path: 'main',
		redirectTo: 'schedules',
		pathMatch: 'full'
	},
	...MapRoutes
];