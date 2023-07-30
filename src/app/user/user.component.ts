// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  logout(): void {
    // Implement logout logic here
    // For example, clear user session, redirect to login page, etc.
  }
}
