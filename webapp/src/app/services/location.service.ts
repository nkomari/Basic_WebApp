import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  baseUrl = "http://localhost:8080/api/location";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getOne(value: any) {
    return this.http.get(this.baseUrl + "/" + value);
  }
}
