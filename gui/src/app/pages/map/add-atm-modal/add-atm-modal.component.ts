import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";
import {CommonService} from "../../../shared/services/common.service";

interface ATM {
	name: string,
	address: string,
	area: string,
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
	public currencies: any = CommonService.getCurrencies();
	public cassettes: any = [
		{
			max_number: null,
			currency: 'BLN'
		},
		{
			max_number: null,
			currency: 'BLN'
		},
		{
			max_number: null,
			currency: 'BLN'
		},
		{
			max_number: null,
			currency: 'BLN'
		}
	];

	constructor(public dialogRef: MdDialogRef<AddATMModalComponent>,
				@Inject(MD_DIALOG_DATA) public modalData: any) {
	}

	addATM() {
		this.dialogRef.close(Object.assign(this.atm, this.modalData.location));
	}

	addCassette() {
		this.cassettes.push({
			max_number: null,
			currency: 'BLN'
		});
	}

	removeCassette() {
		this.cassettes.pop();
	}
}