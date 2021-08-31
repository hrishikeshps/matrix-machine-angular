import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  AUTH_TOKEN = 'auth_token';

  constructor(private httpClient: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    const data = { params };
    return this.httpClient
      .get(url, data)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, payload: any): Observable<any> {
    const data = payload;
    return this.httpClient
      .post(url, data)
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  
  put(url: string, payload: any): Observable<any> {
    const data = payload;
    return this.httpClient
      .put(url, data, {responseType: 'text'})
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response: any) {
    console.log('Error in API');
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      console.log('401 error');
      // auth token delete
      // redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
      console.log('connection problem');
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({ messages: message, error });
  }

  //   private getAuthHeader(): { [header: string]: string | string[]; } {
  //     return {
  //       Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
  //     };
  //   }
}
