import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ApiService } from './api.service';
 
@Component({
  selector: 'app-question-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent {
  index: number = 0;
  correctOption: number = Math.floor(Math.random() * 4)+1;
  optionIndex = 0;
  @Output() switchPage = new EventEmitter<string>();
  selectedChoice: number =0;
  questions: any[] = [];
  size: number = 0;
  selectChoice(choiceNumber: number){
    this.selectedChoice = choiceNumber;
    this.optionIndex=0;
  }
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.fetchQuestions();
  }

  fetchQuestions(){
    this.apiService.getQuestions().subscribe(
      (data) => {
        console.log('Questions', data);
        this.questions = data;
        this.size = data.length;
      },
      (error) => {
        console.error('Error Fetching questions:', error);
      }
    )
  }
  switchToStartPage(){
    this.switchPage.emit("startPage");
  }

  nextQuestion(){
    this.correctOption = Math.floor(Math.random() * 4)+1;
    this.index +=1;
    this.optionIndex =0;
    this.selectedChoice =0;

  }

  updateCounter(){
    this.optionIndex +=1;
  }
}
