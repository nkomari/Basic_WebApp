import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"],
})
export class LocationListComponent implements OnInit {
  locations: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.retrieveLocations();
  }

  retrieveLocations() {
    this.locationService.getAll().subscribe(
      (data) => {
        this.locations = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
