import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  @Output() switchPage = new EventEmitter<string>();

  switchToStartPage(){
    console.log('switch to start')
    this.switchPage.emit("startPage");
  }
}
