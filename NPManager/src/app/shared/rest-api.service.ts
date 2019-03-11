import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Diario } from '../shared/diario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

/*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch diarios list
  getDiarios(): Observable<Diario> {
    return this.http.get<Diario>(this.apiURL + '/diarios')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch diario
  getDiario(id): Observable<Diario> {
    return this.http.get<Diario>(this.apiURL + '/diarios/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create diario
  createDiario(diario): Observable<Diario> {
    return this.http.post<Diario>(this.apiURL + '/diarios', JSON.stringify(diario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update diario
  updateDiario(id, employee): Observable<Diario> {
    return this.http.put<Diario>(this.apiURL + '/diarios/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method => Delete diario
  deleteDiario(id) {
    return this.http.delete<Diario>(this.apiURL + '/diarios/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
