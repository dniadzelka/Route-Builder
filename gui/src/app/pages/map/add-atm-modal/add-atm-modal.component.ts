import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
	selector: 'add-atm-modal',
	templateUrl: './add-atm-modal.component.html',
	styleUrls: ['./add-atm-modal.component.scss'],
	providers: []
})

export class AddATMModalComponent {
	public atm = {};
	public loading: boolean = false;

	constructor(public dialogRef: MdDialogRef<AddATMModalComponent>,
				@Inject(MD_DIALOG_DATA) public modalData: any) {}

	addATM() {
		this.dialogRef.close(this.atm);
	}
}