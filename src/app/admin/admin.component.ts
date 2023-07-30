import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminDetails = {
    adminId: "12345",
    adminName: "John Doe",
    adminUsername: "john_doe",
    adminEmail: "john.doe@example.com"
  };

  constructor() { }

  ngOnInit(): void {
    this.displayAdminDetails();
  }

  displayAdminDetails(): void {
    // Display the admin details on the webpage
    const adminIdPlaceholder = document.getElementById("admin-id-placeholder");
    const adminNamePlaceholder = document.getElementById("admin-name-placeholder");
    const adminUsernamePlaceholder = document.getElementById("admin-username-placeholder");
    const adminEmailPlaceholder = document.getElementById("admin-email-placeholder");

    if (adminIdPlaceholder && adminNamePlaceholder && adminUsernamePlaceholder && adminEmailPlaceholder) {
      adminIdPlaceholder.textContent = this.adminDetails.adminId;
      adminNamePlaceholder.textContent = this.adminDetails.adminName;
      adminUsernamePlaceholder.textContent = this.adminDetails.adminUsername;
      adminEmailPlaceholder.textContent = this.adminDetails.adminEmail;
    }

    // Add click event listener to the logout button
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        // Redirect to home.html after clicking the logout button
        window.location.href = "home.html";
      });
    }
  }
}
