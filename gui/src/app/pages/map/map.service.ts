import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {PopUpService} from "../../shared/services/pop-up-service";
import {AddATMModalComponent} from "./add-atm-modal/add-atm-modal.component";

@Injectable()
export class MapService {

	constructor(private popUpService: PopUpService,
				private dialog: MdDialog) {}

	public openAddATMModal(data?): Observable<boolean> {
		const config: MdDialogConfig = this.popUpService.getModalConfig(data);
		let dialogRef = this.dialog.open(AddATMModalComponent, config);
		return dialogRef.afterClosed();
	}
}