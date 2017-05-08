import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
	selector: 'rules-modal',
	templateUrl: './rules-modal.component.html',
	styleUrls: ['./rules-modal.component.scss'],
	providers: []
})

export class RulesModalComponent {
	// public atm: ATM = <ATM>{};
	// public loading: boolean = false;
	// public currencies: any = CommonService.getCurrencies();
	// public cassettes: any = [
	// 	{
	// 		max_number: null,
	// 		currency: 'BLN'
	// 	},
	// 	{
	// 		max_number: null,
	// 		currency: 'BLN'
	// 	},
	// 	{
	// 		max_number: null,
	// 		currency: 'BLN'
	// 	},
	// 	{
	// 		max_number: null,
	// 		currency: 'BLN'
	// 	}
	// ];

	constructor(public dialogRef: MdDialogRef<RulesModalComponent>,
				@Inject(MD_DIALOG_DATA) public modalData: any) {
	}

	// addATM() {
	// 	this.dialogRef.close(Object.assign(this.atm, this.modalData.location));
	// }
	//
	// addCassette() {
	// 	this.cassettes.push({
	// 		max_number: null,
	// 		currency: 'BLN'
	// 	});
	// }
	//
	// removeCassette() {
	// 	this.cassettes.pop();
	// }

	save(): void {

	}
}