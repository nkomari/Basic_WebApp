import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocationListComponent } from "./components/location-list/location-list.component";
import { LocationDetailsComponent } from "./components/location-details/location-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "locations",
    pathMatch: "full",
  },
  {
    path: "locations",
    component: LocationListComponent,
  },
  {
    path: "locations/:uuid",
    component: LocationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
