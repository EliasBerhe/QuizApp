import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private apiUrl = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple&encode=url3986'; // API URL
  map: Map<string, number> = new Map();
  
  constructor(private http: HttpClient) {
    this.map.set("General Knowledge",9);
    this.map.set("Sports",21);
    this.map.set("Film", 11);
    this.map.set("Science", 17);
  }
  

  // Fetch questions from the API
  getQuestions(category: string, difficulty:string): Observable<any[]> {
    const apiUrl = `https://opentdb.com/api.php?amount=5&category=${this.map.get(category)}&difficulty=${difficulty}&type=multiple&encode=url3986`;
    console.log(apiUrl);
    return this.http.get<any>(apiUrl).pipe(
      map(response => response.results) // Extract the 'results' array from the response
    );
  }
}
