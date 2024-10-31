import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
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
  @Output() correctAnswersCount = new EventEmitter<number>(); // Emit correct answers count
  @Input() selectedCategory!: string;
  @Input() selectedDifficulty!: string;
  selectedChoice: number =0
  questions: any[] = [];
  size: number = 0;
  answerChecked: boolean = false; // Flag to track if the answer was checked
  wrongChoice: number = 0; // Track the incorrect choice if any
  correctAnswers: number = 0;

  selectChoice(choiceNumber: number){
    this.selectedChoice = choiceNumber;
    this.optionIndex=0;
  }
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.fetchQuestions();
  }

  fetchQuestions(){
    this.apiService.getQuestions(this.selectedCategory, this.selectedDifficulty).subscribe(
      (data) => {
        console.log('Questions', data);
        this.questions = (data);
        this.size = data.length;
      },
      (error) => {
        console.error('Error Fetching questions:', error);
      }
    )
  }

  switchToLandingPage(){
    //Check if last selected choice was correct before moving to next quesiton
    if(this.selectedChoice === this.correctOption){
      this.correctAnswers++; //increment the overall
    }

    this.correctAnswersCount.emit(this.correctAnswers); // Emit the correct answers count
    this.switchPage.emit("landingPage");
  }

  nextQuestion(){
    //Check if last selected choice was correct before moving to next quesiton
    if(this.selectedChoice === this.correctOption){
      this.correctAnswers++; //increment the overall
    }

    this.correctOption = Math.floor(Math.random() * 4)+1;
    this.index +=1;
    this.optionIndex =0;
    this.selectedChoice =0;
    this.answerChecked = false; // Reset the flag for the next question
     this.wrongChoice = 0; // Reset the wrong choice

  }
  checkAnswer(){
    this.answerChecked = true; // Mark that the answer has been checked
    this.optionIndex = 0;
    if (this.selectedChoice !== this.correctOption) {
      this.wrongChoice = this.selectedChoice; // Track wrong choice if the answer is incorrect
    }
  }

  updateCounter(){
    // if (this.answerChecked ) {
    //   this.optionIndex += 1;
    // }
    this.optionIndex += 1;
  }
  decode(question: string){
    return decodeURIComponent(question);
  }
}
