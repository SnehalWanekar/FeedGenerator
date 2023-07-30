import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDetails: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Get the userDetails from the UserService
    this.userDetails = this.userService.getUserDetails;
  }
}
