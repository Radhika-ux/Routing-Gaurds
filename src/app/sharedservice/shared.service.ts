import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   email ="radhika";
   password=123;
  constructor() {} 
  isloggedIn(){
    //console.log("access is activated");
    return true;
  }
  
}

