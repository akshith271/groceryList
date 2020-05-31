import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-grocery-item",
  templateUrl: "./grocery-item.component.html",
  styleUrls: ["./grocery-item.component.scss"],
})
export class GroceryItemComponent implements OnInit {
  @Input() grocery;
  counter = 1;
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  addToCart() {
    this.dataService.addToCart(this.grocery.id, this.counter);
  }
}
