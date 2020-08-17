import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { UserService } from "../user.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}
  placeFitness = this.fb.group({
    firstname: ["Anjali", Validators.required],
    lastname: ["Birla", Validators.required],
    age: [23, Validators.required],
    phonenumber: [1233456678, Validators.required],
    email: ["anjali1998@gmail.com", Validators.required],
    trainerpreference: ["female", Validators.required],
    physiotherapist: ["yes", Validators.required],
    packages: [2300, Validators.required],
    inr: [30, Validators.required],
    paisa: [40, Validators.required],
    id: [7, Validators.required],

    streetaddress: ["sp-42 riico", Validators.required],
    city: ["jaipur", Validators.required],
    state: ["rajasthan", Validators.required],
    country: ["india", Validators.required],
    pincode: [301140, Validators.required],
  
  });

  onSubmit() {
    console.log(this.placeFitness.value);
    this.userService.getData(this.placeFitness.value).subscribe(
      (res) => console.log("Success!!", res),
      (error) => console.error("ERROR!", error)
    );
  }
  ngOnInit() {}
}
