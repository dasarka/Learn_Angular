import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '../../../node_modules/@angular/forms';
import { PasswordValidators } from './password.validation';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent{
  updatePassForm;
  constructor(fb: FormBuilder){
    this.updatePassForm=fb.group({
      oldPassword  : new FormControl('',
      Validators.required,
      PasswordValidators.verifyPassword),
    newPassword  : new FormControl('',
    Validators.required),
    confirmPassword :new FormControl('',
    Validators.required)
    },{
      validator : PasswordValidators.checkPassword
    });
  }
  get oldPassword(){
    return this.updatePassForm.get('oldPassword');
  }
  get newPassword(){
    return this.updatePassForm.get('newPassword');
  }
  get confirmPassword(){
    return this.updatePassForm.get('confirmPassword');
  }

  changePassword(){
    console.log(this.updatePassForm);
  }
}
