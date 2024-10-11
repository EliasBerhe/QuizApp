import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple'; // API URL

  constructor(private http: HttpClient) {}

  // Fetch questions from the API
  getQuestions(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results) // Extract the 'results' array from the response
    );
  }
}
