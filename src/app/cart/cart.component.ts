import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  orders = this.dataService.getOrders();

  getBillingAmount() {
    return this.dataService.getBillingAmount();
  }
  removeItem(id) {
    this.dataService.remove(id);
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
