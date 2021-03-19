import { Component, OnInit } from "@angular/core";
import { LayoutService } from "../services/layout.service";

@Component({
  selector: "app-navtop",
  templateUrl: "./navtop.component.html",
  styleUrls: ["./navtop.component.less"]
})
export class NavtopComponent implements OnInit  {

	sidenavOpened!: boolean;

	constructor(private readonly layoutService: LayoutService) { }

	toggleSidenav() {
		this.layoutService.toggleSidenav();
	}

	ngOnInit() {
		this.layoutService.sidenavOpened().subscribe(sidenavStatus => {
			this.sidenavOpened = sidenavStatus;
		});
	}
}
