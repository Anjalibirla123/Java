import { Component, OnInit } from "@angular/core";
import { Comments } from "../classes/comments";
import { UserService } from "../user.service";

@Component({
  selector: "app-view-appointmet",
  templateUrl: "./view-appointmet.component.html",
  styleUrls: ["./view-appointmet.component.css"],
})
export class ViewAppointmetComponent implements OnInit {
  constructor(private _userService: UserService) {}
  lstcomments: Comments[];

  ngOnInit() {
    this._userService.makeRequest().subscribe((data) => {
      this.lstcomments = data;
    });
  }
}
