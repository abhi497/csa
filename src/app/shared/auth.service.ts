import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  _http : HttpClient, private _router: Router) { }

  private registerUrl = 'http://localhost:3000/register';
  private loginUrl = 'http://localhost:3000/login';

  registerUser(user){
    return this._http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this._http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
