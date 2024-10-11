import { Component, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent {
@Output() switchPage = new EventEmitter<string>();
selectedChoice: number =0;

selectChoice(choiceNumber: number){
  this.selectedChoice = choiceNumber;
}
switchToStartPage(){
  this.switchPage.emit("startPage");
}
}
