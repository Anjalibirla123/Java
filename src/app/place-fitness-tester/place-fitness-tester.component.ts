import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Comments } from "../classes/comments";

@Component({
  selector: "app-place-fitness-tester",
  templateUrl: "./place-fitness-tester.component.html",
  styleUrls: ["./place-fitness-tester.component.css"],
})
export class PlaceFitnessTesterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  userModel = new Comments(
    "Anjali",
    "Birla",
    23,
    "jaipur",
    "Rajasthan",
    5697983456,
    "anjali@gmail.com",
    "sp-42 Riico industrial area",
    "India",
    3011403,
    "female",
    "no",
    3000,
    123,
    50,
    40
  );

  onSubmit() {
    console.log(this.userModel);
  }
}
