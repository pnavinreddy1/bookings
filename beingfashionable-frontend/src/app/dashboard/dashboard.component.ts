import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = "Naveen";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        console.log("signout");
        console.log("You are successfully logged out");
        this.router.navigate(["/"]);
      })
      .catch(err => console.log(err));
  }

}
