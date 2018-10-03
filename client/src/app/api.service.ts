import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {
  user;
  constructor(private _http: Http) { }
  setUser(user){
    console.log('assigning current user')
    this.user = user
  }
  getUser(){
    console.log('returning current user')
    return this.user;
  }
  getAllUsers(){
    console.log('fetching all users')
    return this._http.get('/getAllUsers')
  }
  register(user){
    console.log('Registering')
    this._http.post('/register', user).subscribe(
      data =>{
        console.log("success!");
      },
      err =>{
        console.log('something went wrong')
      }
    )
  }
  login(user){
    console.log('Logging in')
    return this._http.post('/login', user);
  }
  
}
