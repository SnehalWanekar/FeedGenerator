// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      // Perform login validation and authentication here
      // You can use the 'username' and 'password' properties for login credentials
      // Example:
      if (this.username === 'admin' && this.password === 'admin123') {
        alert('Login successful!');
        // Redirect to another page (replace 'index' with the desired page)
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
  }
}
