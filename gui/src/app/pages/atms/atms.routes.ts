import {Routes} from "@angular/router";
import {AtmsComponent} from "./atms.component";

export const AtmsRoutes: Routes = <Routes>[
	{
		path: 'atms',
		children: [
			{
				path: 'atms',
				component: AtmsComponent
			}
		]
	}
];