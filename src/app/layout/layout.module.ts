import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenav/sidenav-content/sidenav-content.component';
import { MaterialModule } from "../core/material/material.module";

@NgModule({
	declarations: [ SidenavComponent, SidenavContentComponent],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MaterialModule
	]
})

export class LayoutModule { }
