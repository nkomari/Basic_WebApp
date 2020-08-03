import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-location-details",
  templateUrl: "./location-details.component.html",
  styleUrls: ["./location-details.component.css"],
})
export class LocationDetailsComponent implements OnInit {
  details: object;
  uuid = "";
  show: boolean = false;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  searchLocation() {
    console.log(this.uuid);
    if (this.uuid != "") {
      this.locationService.getOne(this.uuid).subscribe(
        (data) => {
          this.details = data;
          console.log(data);
          this.show = true;
        },
        (error) => {
          this.show = false;
          console.log(error);
          if (error.status == 404) {
            alert("No location found with the given UUID");
          }
        }
      );
    } else {
      this.show = false;
      alert("Please enter UUID value");
    }
  }

  // onSubmit(form: NgForm) {
  //   console.log("form value", form.value);
  //   if (form.value.search == "") {
  //     this.ngOnInit();
  //   } else {
  //     console.log("onsubmit");
  //     this.locationService.getOne(form.value.search).subscribe((data) => {
  //       this.details = data;
  //       console.log(data);
  //     });
  //   }
  // }
}
