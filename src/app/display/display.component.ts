// display.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Function to filter the table based on ID search
  filterById() {
    // Add the code for filtering by ID here
  }

  // Function to filter the table based on date search
  filterByDate() {
    // Add the code for filtering by date here
  }

  // Function to clear filters and show the original table
  clearFilters() {
    // Add the code to clear filters and show the original table here
  }

}
