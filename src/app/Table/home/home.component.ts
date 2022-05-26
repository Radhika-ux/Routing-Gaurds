import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm :any ;
  title: any;
  constructor() { 
  this.title ="Registration Form"
  }
  ngOnInit(): void {
  
//   this.registerForm = new FormGroup({
//   email: new FormControl('',[Validators.required,Validators.pattern("")]),
//    password: new FormControl('',[Validators.required,Validators.pattern('')])
//   })
// }

// submitFunction(){
//   console.log(this.registerForm.value);
// }
// get email()
// {
//   return this.registerForm.get('email');
// }
// get password(){
//   return this.registerForm.get('password')
// }
// 
  }
}