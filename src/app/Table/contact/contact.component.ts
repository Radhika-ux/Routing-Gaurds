import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  registerform: any;
  constructor() { }

  ngOnInit(): void {
    this.registerform = new FormGroup({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.pattern('')])
    })
  }

  submitFunction() {
    console.log(this.registerform.value);
    localStorage.setItem("email",this.registerform.value.email);
    localStorage.setItem("password",this.registerform.value.password);
  }
  get email() {
    return this.registerform.get('email');
  }
  get password() {
    return this.registerform.get('password')
  }
  

}


