import { Component } from "@angular/core";
import { LanguageKind } from "./core/models";
import { AppTranslateService } from "./core/services";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.less"]
})

export class AppComponent {

	constructor(appTranslateService: AppTranslateService) {
		appTranslateService.setDefaultLanguage(LanguageKind.EN);
	}
}
