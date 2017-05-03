import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";

@Injectable()
export class MapBindingsService {
	private static leftPanelStateSubject: Subject<any> = new Subject<any>();

	static applyLeftPanelState(state: any): void {
		MapBindingsService.leftPanelStateSubject.next(state);
	}

	static leftStateChanged(): Observable<any> {
		return MapBindingsService.leftPanelStateSubject.asObservable();
	}
}