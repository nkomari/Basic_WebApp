import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocationDetailsComponent } from "./components/location-details/location-details.component";
import { LocationListComponent } from "./components/location-list/location-list.component";

@NgModule({
  declarations: [AppComponent, LocationDetailsComponent, LocationListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
