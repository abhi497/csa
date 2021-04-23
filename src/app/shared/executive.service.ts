import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Executive } from './executive.model';

@Injectable({
  providedIn: 'root'
})
export class ExecutiveService {

  selectedExecutive : Executive;
  Executives: Executive[];

  executiveDesignation = [
    { key: 'electritian', value: 'electritian'},
    { key: 'plumber', value: 'plumber'},
    { key: 'carpenter', value: 'carpenter'},
    { key: 'cleaner', value: 'cleaner'}
  ]

  executiveStatus = [
    { key: 'available', value: 'available' },
    { key: 'engage', value: 'engage'}
  ]

  constructor(private _http : HttpClient) { }

  readonly baseUrl = 'http://localhost:3000/executive';

  getExecutive() {
    return this._http.get<any>(this.baseUrl);
  }

  updateExecutive(executive : Executive) {
    return this._http.put(`${this.baseUrl}/${executive._id}`, executive);
  }

  deleteExecutive(id) {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
