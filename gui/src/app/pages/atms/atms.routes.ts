import {Routes} from "@angular/router";
import {AtmsComponent} from "./atms.component";
import {AtmReportComponent} from "./atm-report/atm-report.component";
import {AtmReportLeftPanelComponent} from "./atm-report/left-panel/atm-report-left-panel.component";
import {AtmsLeftPanelComponent} from "./left-panel/atms-left-panel.component";

export const AtmsRoutes: Routes = <Routes>[
	{
		path: 'atms',
		children: [
			{
				path: '',
				component: AtmsComponent
			},
			{
				path: '',
				component: AtmsLeftPanelComponent,
				outlet: 'left'
			}
		]
	},
	{
		path: 'atms/:id',
		children: [
			{
				path: '',
				component: AtmReportComponent
			},
			{
				path: '',
				component: AtmReportLeftPanelComponent,
				outlet: 'left'
			}
		]
	}

];