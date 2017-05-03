import {Routes} from "@angular/router";
import {MapComponent} from "./map.component";
import {MapLeftPanelComponent} from "./left-panel/map-left-panel.component";

export const MapRoutes: Routes = <Routes>[
	{
		path: 'map',
		children: [
			{
				path: '',
				component: MapComponent
			},
			{
				path: '',
				component: MapLeftPanelComponent,
				outlet: 'left'
			}
		]
	}
];