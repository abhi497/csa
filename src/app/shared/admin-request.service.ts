import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminRequestService {

  request: Request[];

  readonly baseURL = 'http://localhost:3000/request';


  constructor(private http: HttpClient) { }

  getRequest(){
    return this.http.get(this.baseURL)
  }
}
