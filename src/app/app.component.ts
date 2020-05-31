import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service"; //importing the service

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  getGroceries() {
    return this.dataService.getGroceries();
  }

  title = "groceries";

  constructor(private dataService: DataService) {} //importing service by declaring it as a private thing
  ngOnInit() {                                     //(therefore, usage of this)
  }
}
