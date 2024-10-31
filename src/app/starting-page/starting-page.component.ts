import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.css',
  styles: ["node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class StartingPageComponent {
  @Input() categoryList!: string[];
  @Input() difficulties!: String[];
// this used to emit a value when an some event happens in out case a button clicked 
  @Output() switchPage = new EventEmitter<string>();
  @Output() startQuiz = new EventEmitter<{ category: string; difficulty: string }>(); // Emit selected values
  selectedCategory: string = "";
  selectedDifficulty: string = "";
  isVisible: boolean = false;

  switchToQuestionPage() {
    if((this.selectedCategory != "") && (this.selectedDifficulty != "")) {
      console.log(this.selectedCategory)
      console.log(this.selectedDifficulty)
      console.log('pressed');
      this.startQuiz.emit({
        category: this.selectedCategory,
        difficulty: this.selectedDifficulty,
      });
      this.switchPage.emit('questionPage');
    } else {
      this.isVisible = true
    }
  }

}
