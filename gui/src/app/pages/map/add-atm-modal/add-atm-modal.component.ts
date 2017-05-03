import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

interface ATM {
	name: string,
	address: string,
	lat: number;
	lng: number;
}

@Component({
	selector: 'add-atm-modal',
	templateUrl: './add-atm-modal.component.html',
	styleUrls: ['./add-atm-modal.component.scss'],
	providers: []
})

export class AddATMModalComponent {
	public atm: ATM = <ATM>{};
	public loading: boolean = false;

	constructor(public dialogRef: MdDialogRef<AddATMModalComponent>,
				@Inject(MD_DIALOG_DATA) public modalData: any) {}

	addATM() {
		this.atm.lat = this.modalData.lat;
		this.atm.lng = this.modalData.lng;
		this.dialogRef.close(this.atm);
	}
}