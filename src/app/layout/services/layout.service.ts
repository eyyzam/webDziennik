import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LayoutService {

	private _sidenavOpened = new BehaviorSubject<boolean>(true);

	toggleSidenav() {
		this._sidenavOpened.getValue() ? this._sidenavOpened.next(false) : this._sidenavOpened.next(true);
	}

	sidenavOpened() {
		return this._sidenavOpened.asObservable();
	}
}
