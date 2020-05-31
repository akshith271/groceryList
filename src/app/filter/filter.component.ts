import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  selected = "";
  filterText = "";
  filterTextChanged() {
    this.dataService.filter(this.filterText);
  }
  resetFilter() {
    this.selected = "";
    this.dataService.sort(this.selected);
    this.filterText = "";
    this.dataService.filter(this.filterText);
  }
  sort() {
    this.dataService.sort(this.selected);
  }
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
