import {Component, OnDestroy} from "@angular/core";
import {MapBindingsService} from "./map-binfings.service";
import {MdSnackBar} from "@angular/material";
import {PopUpService} from "../../shared/services/pop-up-service";
import {MapService} from "./map.service";
import {RestService} from "../../shared/api/rest.service";
import {Observable} from "rxjs";

interface marker {
	name?: string,
	address?: string,
	lat: number;
	lng: number;
}

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	providers: [MapBindingsService, MdSnackBar, PopUpService, MapService, RestService]
})

export class MapComponent implements OnDestroy {
	minskAreas;
	zoom: number = 12;
	lat: number = 53.904540;
	lng: number = 27.561524;
	leftPanelStateSubscription;
	handleAddATM: boolean = false;
	markers: marker[] = [];
	loading: boolean = false;

	constructor(private mdSnackBar: MdSnackBar, private popUpService: PopUpService, private mapService: MapService, private restService: RestService) {
		this.leftPanelStateSubscription = MapBindingsService.leftStateChanged().subscribe((state) => {
			if (state.addATM) {
				this.popUpService.openDialog('ATTENTION', 'At first you need pick map to locate ATM.', 'OK').subscribe((data) => {
					if (data) {
						this.handleAddATM = true;
					}
				});
			}
		});

		this.init();
	}

	init() {
		this.loading = true;
		Observable.forkJoin([
			this.restService.getATMs(),
			this.restService.getMinskAreas()
		]).subscribe((response: any[]) => {
			this.markers = response[0];
			this.minskAreas = response[1];
			this.loading = false;
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

			this.markers.push(location);
			this.mapService.openAddATMModal({
				location: location,
				minskAreas: this.minskAreas
			}).subscribe((data) => {
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

	ngOnDestroy() {
		this.leftPanelStateSubscription.unsubscribe();
	}
}