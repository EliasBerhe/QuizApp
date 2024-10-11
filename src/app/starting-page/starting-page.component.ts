import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.css',
  styles: ["node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class StartingPageComponent {
  @Input() categoryList!: String[];
  @Input() difficulties!: String[];
// this used to emit a value when an some event happens in out case a button clicked 
  @Output() switchPage = new EventEmitter<string>();

  switchToQuestionPage() {
    console.log('pressed');
    this.switchPage.emit('questionPage');
  }
 
}
