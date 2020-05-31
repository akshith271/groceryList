import { Injectable } from "@angular/core";
import { GROCERIES } from "../../groceries";

@Injectable({
  providedIn: "root",
})
export class DataService {
  groceries = GROCERIES;
  cart = [];
  billingAmount = 0;

  getGroceries() {
    return this.groceries;
  }

  getOrders() {
    return this.cart;
  }

  getBillingAmount() {
    return this.billingAmount;
  }

  addToCart(id, quantity) {
    const match = this.cart.find((item) => id === item.id);
    console.log("before ", match);
    if (match) {
      let price = match.total / match.quantity;
      match.quantity = quantity;
      match.total = quantity * price;
      console.log("after", match);
    } else {
      const grocery = this.groceries.find((item) => id === item.id);
      const order = {
        id: id,
        name: grocery.name,
        quantity: quantity,
        total: quantity * grocery.price,
      };

      this.cart.push(order);
      console.log("cart", this.cart);
    }

    this.updateBill();
  }

  updateBill() {
    let total = 0;
    this.cart.forEach((item) => {
      total = total + item.total;
    });
    this.billingAmount = total;
  }

  sort(value) {
    if (value === "priceDescending") {
      this.groceries.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (value === "priceAscending") {
      this.groceries.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (value === "letterAscending") {
      this.groceries.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if (value === "letterDescending") {
      this.groceries.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if (value === "") {
      this.groceries.sort((a, b) => {
        return a.id - b.id;
      });
    }
  }

  remove(id) {
    const order = this.cart.find((item) => item.id === id);
    const index = this.cart.indexOf(order);
    this.cart.splice(index, 1);
    this.updateBill();
  }

  filter(filter) {
    if (filter.length > 0) {
      const search = this.groceries.filter((item) => {
        return (
          item.name.search(new RegExp(filter, "i")) > -1 ||
          item.description.search(new RegExp(filter, "i")) > -1
        );
      });
      this.groceries = search;
      console.log(search);
    } else {
      this.groceries = GROCERIES;
    }
  }
}
