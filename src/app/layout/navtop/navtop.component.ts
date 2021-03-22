import { Component, OnInit } from "@angular/core";
import { LayoutService } from "../services/layout.service";
import { AppTranslateService } from "../../core/services/common/regular/AppTranslate.service";
import { LanguageKind } from "../../core/models/enums/LanguageKind";

@Component({
  selector: "app-navtop",
  templateUrl: "./navtop.component.html",
  styleUrls: ["./navtop.component.less"]
})

export class NavtopComponent implements OnInit  {

	sidenavOpened!: boolean;
	languages!: Array<string>;

	constructor(
		private readonly _layoutService: LayoutService,
		private readonly _translateService: AppTranslateService
	) { }

	toggleSidenav() {
		this._layoutService.toggleSidenav();
	}

	ngOnInit() {
		this.languages = this._translateService.languagesList;

		this._layoutService.sidenavOpened().subscribe(sidenavStatus => {
			this.sidenavOpened = sidenavStatus;
		});
	}

	changeLanguage(lang: string) {
		this._translateService.use(lang);
	}
}
