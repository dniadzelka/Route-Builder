import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {MdDialog, MdDialogConfig, DialogPosition} from "@angular/material";
import {ConfirmationModalComponent} from "../components/confirmation-modal/confirmation-modal.component";

@Injectable()
export class PopUpService {
	public dialogWidth: string = '400px';
	public dialogPosition: DialogPosition = {
		top: '10%',
		bottom: '',
		left: '',
		right: ''
	};

	constructor(private dialog: MdDialog) {}

	public getModalConfig(data?): MdDialogConfig {
		return <MdDialogConfig>{
			disableClose: false,
			position: this.dialogPosition,
			data: data ? data : {}
		}
	}

	public getDialogConfig(title: string, message: string, buttonText: string, isWarning?: boolean): MdDialogConfig {
		return <MdDialogConfig>{
			width: this.dialogWidth,
			position: this.dialogPosition,
			data: {
				title: title,
				message: message,
				buttonText: buttonText,
				warning: isWarning
			}
		};
	}

	public openDialog(title: string, message: string, buttonText: string, isWarning?: boolean): Observable<boolean> {
		const config: MdDialogConfig = this.getDialogConfig(title, message, buttonText, isWarning);
		let dialogRef = this.dialog.open(ConfirmationModalComponent, config);
		return dialogRef.afterClosed();
	}
}