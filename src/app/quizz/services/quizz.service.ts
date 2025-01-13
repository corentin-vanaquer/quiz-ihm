import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { QuizzInput } from '../interfaces/quizz-input.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) {}
  
  getQuestion(): Observable<string> {
    return this.http.get(`${environment.apiUrl}/api/question`, { responseType: 'text' });
  }

  submitAnswer(answer: QuizzInput): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/api/submit-answer`, answer);
  }

}
