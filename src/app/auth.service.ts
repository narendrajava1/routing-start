import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn=false;
  isAuthenticated(){
    const proms=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn)
      },800)
    })
    return proms;
  }

  login(){
    this.loggedIn=true;
  }

  logout(){
    this.loggedIn=false;
  }
}
