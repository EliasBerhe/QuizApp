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
  @Input() categoryList!: String[];
  @Input() difficulties!: String[];
// this used to emit a value when an some event happens in out case a button clicked 
  @Output() switchPage = new EventEmitter<string>();
  selectedCategory: string = "";
  selectedDifficulty: string = "";
  isVisible: boolean = false;

  switchToQuestionPage() {
    if((this.selectedCategory != "") && (this.selectedDifficulty != "")) {
      console.log(this.selectedCategory)
      console.log(this.selectedDifficulty)
      console.log('pressed');
      this.switchPage.emit('questionPage');
    } else {
      this.isVisible = true
    }
  }

}
