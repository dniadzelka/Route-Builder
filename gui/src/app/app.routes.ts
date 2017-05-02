import {Routes} from '@angular/router';
import {MapRoutes} from './pages/map/map.routes';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'map',
		pathMatch: 'full'
	},
	...MapRoutes
];