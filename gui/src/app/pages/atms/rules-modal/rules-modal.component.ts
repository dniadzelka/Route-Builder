import {Component, Inject} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";
import {CommonService} from "../../../shared/services/common.service";

@Component({
	selector: 'rules-modal',
	templateUrl: './rules-modal.component.html',
	styleUrls: ['./rules-modal.component.scss'],
	providers: []
})

export class RulesModalComponent {
	public rules = <any>{};
	public statisticPeriods = CommonService.getStatisticPeriods();
	public granularities = CommonService.getGranularities();

	constructor(public dialogRef: MdDialogRef<RulesModalComponent>,
				@Inject(MD_DIALOG_DATA) public modalData: any) {
	}

	save(): void {

	}
}