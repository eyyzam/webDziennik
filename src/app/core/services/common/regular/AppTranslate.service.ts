import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageKind } from "../../../models";
import defaultLanguage from "src/assets/i18n/en.json";

@Injectable({
	providedIn: "root"
})

export class AppTranslateService {

	constructor(private readonly _translateService: TranslateService) { }

	setDefaultLanguage(language: LanguageKind) {
		this._translateService.setTranslation("en", defaultLanguage);
		this._translateService.setDefaultLang(language);
	}

	use(language: string) {

		try {
			if (language) {
				localStorage.setItem("lng", language);
			}
			let languageToUse = this._translateService.getBrowserLang();
			const localStorageLanguage = localStorage.getItem("lng");

			if (localStorageLanguage !== null)
				languageToUse = localStorageLanguage;

			this._translateService.use(languageToUse);
		} catch (e) {
			language
				? this._translateService.use(language)
				: this._translateService.use(this._translateService.getBrowserLang());
		}
	}

	get currentLanguage(): LanguageKind {
		return (this._translateService.currentLang ? this._translateService.currentLang : this._translateService.defaultLang) as LanguageKind;
	}

	get defaultLanguage(): LanguageKind {
		return this._translateService.defaultLang as LanguageKind;
	}

	get languagesList(): Array<string> {
		const languages = new Array<string>();

		Object.values(LanguageKind).forEach(lang => {
			languages.push(lang);
		});

		const [, ...languagesArr] = languages; 

		return languagesArr;
	}
}
