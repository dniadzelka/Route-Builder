import {Routes} from '@angular/router';
import {MapRoutes} from './pages/map/map.routes';
import {AtmsRoutes} from "./pages/atms/atms.routes";

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	...MapRoutes,
	...AtmsRoutes
];