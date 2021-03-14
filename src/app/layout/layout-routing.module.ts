import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const layoutRoutes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "home",
				loadChildren: () => import("../pages/home/home.module").then(m => m.HomeModule)
			},
			{
				path: "stats",
				loadChildren: () => import("../pages/statistics/statistics.module").then(m => m.StatisticsModule)
			},
			{
				path: "",
				redirectTo: "home",
				pathMatch: "full"
			},
			{
				path: "**",
				redirectTo: "home",
				pathMatch: "full"
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(layoutRoutes)
	],
	exports: [
		RouterModule
	]
})

export class LayoutRoutingModule { }
