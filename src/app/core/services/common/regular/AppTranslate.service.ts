import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageKind } from "../../../models";

@Injectable({
	providedIn: "root"
})

export class AppTranslateService {

	constructor(private readonly _translateService: TranslateService) { }

	setDefaultLanguage(language: LanguageKind) {
		this._translateService.setDefaultLang(language);
	}

	use(language: string) {
		if (language)
			localStorage.setItem("lng", language);

		let languageToUse = this._translateService.getBrowserLang();
		const localStorageLanguage = localStorage.getItem("lng");

		if (localStorageLanguage !== null)
			languageToUse = localStorageLanguage;

		this._translateService.use(languageToUse);
	}

	get currentLanguage(): LanguageKind {
		return (this._translateService.currentLang ? this._translateService.currentLang : this._translateService.defaultLang) as LanguageKind;
	}

	get defaultLanguage(): LanguageKind {
		return this._translateService.defaultLang as LanguageKind;
	}
}
