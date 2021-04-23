import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Request } from './request.model';
 
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  selectedRequest: Request;
  request: Request[];

  requestTypes = [
    { key: 'electritian', value: 'electritian'},
    { key: 'plumber', value: 'plumber'},
    { key: 'carpenter', value: 'carpenter'},
    { key: 'cleaner', value: 'cleaner'}
  ];

  readonly baseURL = 'http://localhost:3000/request';

  constructor(private http: HttpClient) { }

  postRequest(request: Request){
    return this.http.post(this.baseURL, request);
  }

  getRequest(){
    return this.http.get(this.baseURL)
  }

  deleteRequest(id) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  renderRequest(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  updateRequest(req : Request) {
    return this.http.put(`${this.baseURL}/${req._id}`, req);
  }

}
