import { OnInit, Component } from "@angular/core";
import { LayoutService } from "./services/layout.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"]
})
export class LayoutComponent implements OnInit {

	sidenavOpened!: boolean;

	constructor(private readonly layoutService: LayoutService) { }

	ngOnInit() {
		this.layoutService.sidenavOpened().subscribe(sidenavStatus => {
			this.sidenavOpened = sidenavStatus;
		});
	}
}
