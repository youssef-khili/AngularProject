import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../models/Training';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  trainingsUrl = 'http://localhost:8080/SpringMVC/training/retrieve-all-training';
  supUrl = 'http://localhost:8080/SpringMVC/training/remove-training';
  addUrl = 'http://localhost:8080/SpringMVC/training/add-training';
  upUrl = 'http://localhost:8080/SpringMVC/training/modify-training';
  consUrl = 'http://localhost:8080/SpringMVC/training/retrieve-training';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getUsersName(): Observable<Training[]> {
    return this._http.get<Training[]>(this.trainingsUrl); }

  DeleteTraining(idT: number) {

    return this._http.delete<Training>(this.supUrl + '/' + idT);

  }

  addTraining( can: Training): Observable<Training>{
    return this._http.post<Training>(this.addUrl, can);
  }

  updateTraining(prod: Training): Observable<Training>
  {
    return this._http.put<Training>(this.upUrl + '/' + prod.idTraining, prod, httpOptions);
  }
  consulterTraining(id: number): Observable<Training>{
    return this._http.get<Training>(this.consUrl + '/' + id);
  }

}
