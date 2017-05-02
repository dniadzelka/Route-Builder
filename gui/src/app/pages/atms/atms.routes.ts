import {Routes} from "@angular/router";
import {AtmsComponent} from "./atms.component";
import {AtmReportComponent} from "./atm-report/atm-report.component";

export const AtmsRoutes: Routes = <Routes>[
	{
		path: 'atms',
		component: AtmsComponent
	},
	{
		path: 'atms/:id',
		component: AtmReportComponent
	}
];