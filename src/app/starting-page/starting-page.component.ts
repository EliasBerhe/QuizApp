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
  @Input() categoryList!: number[];
  @Input() difficulties!: String[];
// this used to emit a value when an some event happens in out case a button clicked 
  @Output() startQuiz = new EventEmitter<{ category: number; difficulty: string }>(); // Emit selected values
  @Output() switchPage = new EventEmitter<string>();
  selectedCategory: number = 0;
  selectedDifficulty: string = "";
  isVisible: boolean = false;

  switchToQuestionPage() {
    if (this.selectedCategory && this.selectedDifficulty) {
      console.log(this.selectedCategory, this.selectedDifficulty);
      this.startQuiz.emit({
        category: this.selectedCategory,
        difficulty: this.selectedDifficulty,
      });
    } else {
      this.isVisible = true;
    }
  }

}
