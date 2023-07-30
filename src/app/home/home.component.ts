// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  headingText = '';
  showTooltip = false;

  constructor() { }

  ngOnInit(): void {
    // Dynamically add "Generate Feed Generation" to the page word by word
    const words = "Generate Feed Generation".split(" ");
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        this.headingText += words[currentIndex] + ' ';
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

}
