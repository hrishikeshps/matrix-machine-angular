import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getUsers(): Observable<any> {
    return this.httpService.get(`https://gorest.co.in/public-api/users?_format=json&access-
    token=NELh_j5bLUT72rLc3gpW5X7Jg9Opj4awzce1`);
  }

}
