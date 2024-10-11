import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartingPageComponent, QuestionPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'homePage';
  categoryList: String[] = [
    "General Knowledge",
    "Music",
    "Sports",
    "History"
  ];
  difficulties: String[] = [
    "easy",
    "medium",
    "hard"
  ];
}
