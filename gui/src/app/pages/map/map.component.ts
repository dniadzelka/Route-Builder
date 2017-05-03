import {Component} from "@angular/core";
import {MapBindingsService} from "./map-binfings.service";
import {MdSnackBar} from "@angular/material";
import {PopUpService} from "../../shared/services/pop-up-service";
import {MapService} from "./map.service";
import {RestService} from "../../shared/api/rest.service";

interface marker {
	name: string,
	address: string,
	lat: number;
	lng: number;
}

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	providers: [MapBindingsService, MdSnackBar, PopUpService, MapService, RestService]
})

export class MapComponent {
	zoom: number = 12;
	lat: number = 53.904540;
	lng: number = 27.561524;
	leftPanelStateSubscription;
	handleAddATM: boolean = false;
	markers: marker[] = [];
	loading: boolean = false;

	constructor(private mdSnackBar: MdSnackBar, private popUpService: PopUpService, private mapService: MapService, private restService: RestService) {
		//TODO: unsubscribe later
		this.leftPanelStateSubscription = MapBindingsService.leftStateChanged().subscribe((state) => {
			if (state.addATM) {
				this.popUpService.openDialog('ATTENTION', 'At first you need pick map to locate ATM.', 'OK').subscribe((data) => {
					if (data) {
						this.handleAddATM = true;
					}
				});
			}
		});

		this.initATMs();
	}

	initATMs() {
		this.loading = true;
		this.restService.getATMs().subscribe((data) => {
			this.loading = false;
			this.markers = data;
		});
	}

	clickedMarker(label: any, index: number) {}

	removeATM(id: string) {
		this.popUpService.openDialog('CONFIRMATION', 'Do you want to delete this ATM?', 'OK', true).subscribe((data) => {
			if (data) {
				this.loading = true;
				this.restService.deleteATM({id: id}).subscribe((respData) => {
					this.loading = false;
					this.markers = respData;
					this.mdSnackBar.open('ATM was successfully removed.', '', {duration: 3000});
				});
			}
		});
	}

	mapClicked(event) {
		if (this.handleAddATM) {
			const location = {
				lat: event.coords.lat,
				lng: event.coords.lng
			};

			this.markers.push(Object.assign(location, {name: '', address: ''}));
			this.mapService.openAddATMModal(location).subscribe((data) => {
				if (data) {
					this.loading = true;
					this.restService.addATM(data).subscribe((respData) => {
						this.loading = false;
						this.markers = respData;
						this.mdSnackBar.open('ATM was successfully added.', '', {duration: 3000});
					});
				} else {
					this.markers.pop();
				}
			});

			this.handleAddATM = false;
		}
	}
}