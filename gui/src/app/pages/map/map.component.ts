import {Component} from "@angular/core";
import {MapBindingsService} from "./map-binfings.service";
import {MdSnackBar} from "@angular/material";
import {PopUpService} from "../../shared/services/pop-up-service";

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
}

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	providers: [MapBindingsService, MdSnackBar, PopUpService]
})

export class MapComponent {
	zoom: number = 12;
	lat: number = 53.904540;
	lng: number = 27.561524;
	leftPanelStateSubscription;
	handleAddATM: boolean = false;
	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: false
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: 'C',
			draggable: false
		}
	];

	constructor(private mdSnackBar: MdSnackBar, private popUpService: PopUpService) {
		this.leftPanelStateSubscription = MapBindingsService.leftStateChanged().subscribe((state) => {
			if (state.addATM) {
				this.handleAddATM = true;
				mdSnackBar.open('Pick on map to locate ATM', '', {duration: 5000});
			}
		});
	}

	clickedMarker(label: any, index: number) {
		console.log(label);
		console.log(`clicked the marker: ${label || index}`)
	}

	removeATM() {
		this.popUpService.openDialog('CONFIRMATION', 'Do you want to delete this ATM?', 'DELETE', true).subscribe((data) => {
			if (data) {
				this.mdSnackBar.open('ATM was successfully removed.', '', {duration: 3000});
			}
		});
	}

	mapClicked(event) {
		if (this.handleAddATM) {
			this.markers.push({
				lat: event.coords.lat,
				lng: event.coords.lng
			});
			this.handleAddATM = false;
		}
	}
}