import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz} from '../models/Quiz';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizurl = 'http://localhost:8080/SpringMVC/quiz/retrieve-all-quiz';
  quizadd = 'http://localhost:8080/SpringMVC/quiz/add-quiz';
  quizdel = 'http://localhost:8080/SpringMVC/quiz/remove-quiz';
  consQuiz = 'http://localhost:8080/SpringMVC/quiz/retrieve-quiz';
  modifurl = 'http://localhost:8080/SpringMVC/quiz/modify-quiz';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getQuiz(): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(this.quizurl); }

  DeleteQuiz(idQ: number) {
    return this._http.delete<Quiz>(this.quizdel + '/' + idQ);
  }
  addQuiz( can: Quiz): Observable<Quiz>{
    return this._http.post<Quiz>(this.quizadd, can);
  }

  updateQuiz(prod: Quiz): Observable<Quiz>
  {
    return this._http.put<Quiz>(this.modifurl + '/' + prod.iddQuiz, prod, httpOptions);
  }

  consulterTraining(id: number): Observable<Quiz>{
    return this._http.get<Quiz>(this.consQuiz + '/' + id);
  }

}
