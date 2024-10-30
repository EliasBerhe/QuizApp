import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 // private apiUrl = 'https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986'; // API URL

  constructor(private http: HttpClient) {}

  // Fetch questions from the API
  getQuestions(category:number, difficulty:string): Observable<any[]> {
    console.log(category);
    console.log(difficulty);
    const apiUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;
    
    console.log(apiUrl);
    return this.http.get<any>(apiUrl).pipe(
      map(response => response.results) // Extract the 'results' array from the response
    );
  }
}
