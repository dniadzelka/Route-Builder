import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";

@Component({
	selector: 'confirmation-modal',
	templateUrl: './confirmation-modal.component.html',
	styleUrls: ['./confirmation-modal.component.scss']
})

export class ConfirmationModalComponent {

	constructor(@Inject(MD_DIALOG_DATA) public data: any,
				public dialogRef: MdDialogRef<ConfirmationModalComponent>) {}
}