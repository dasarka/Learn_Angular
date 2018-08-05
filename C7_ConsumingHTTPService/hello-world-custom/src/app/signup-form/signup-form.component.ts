import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserNameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signupForm =new FormGroup({
    username  : new FormControl('',[
      Validators.required,
      Validators.email,
      UserNameValidators.cannotContainSpace
    ],
    UserNameValidators.shouldBeUnique),
    password  : new FormControl('',Validators.required)
  });
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }

  signup(){
    this.signupForm.setErrors({
      inValidData : true
    });
  }
}
