// createaccount.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateAccountComponent {
  // Add properties or logic relevant to the CreateAccountComponent here
  // For example, you might have properties to store the form data and methods to handle form submission.
  
  createAccount() {
    // This is where you'll handle the logic for creating an account.
    // For now, you can add a simple console log to test the function:
    console.log('Create Account button clicked!');
  }
}
