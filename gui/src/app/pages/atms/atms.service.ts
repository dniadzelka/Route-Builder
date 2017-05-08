import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {PopUpService} from "../../shared/services/pop-up-service";
import {RulesModalComponent} from "./rules-modal/rules-modal.component";

@Injectable()
export class AtmsService {

	constructor(private popUpService: PopUpService,
				private dialog: MdDialog) {}

	public openRulesModal(data?): Observable<boolean> {
		const config: MdDialogConfig = this.popUpService.getModalConfig(data);
		let dialogRef = this.dialog.open(RulesModalComponent, config);
		return dialogRef.afterClosed();
	}
}