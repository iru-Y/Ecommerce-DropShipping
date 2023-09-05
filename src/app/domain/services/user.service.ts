import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/respose-pageable.model';
import { ApiPath } from '../utils/api-path';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

   httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers (): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(ApiPath.apiBaseurl + '/users');
  }
}
