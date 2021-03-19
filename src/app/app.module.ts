import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";
import { LayoutComponent } from "./layout/layout.component";
import { StatisticsComponent } from "./pages/statistics/statistics.component";
import { HomeComponent } from "./pages/home/home.component";
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { NavtopComponent } from "./layout/navtop/navtop.component";
import { MaterialModule } from "./core/material/material.module";

registerLocaleData(localeEn, "en");

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		StatisticsComponent,
		HomeComponent,
		SidenavComponent,
		NavtopComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		MaterialModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "pl" }
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}
