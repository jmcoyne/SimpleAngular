import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationDetails} from '../model'



@Component({
  selector: 'app-problem3',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './problem3.component.html',
  styleUrl: './problem3.component.css'
})
export class Problem3Component {

  isLoading = false
  email_address: string | null = ''
  password = ''
  newPassword = ''


  constructor(
    private fb: FormBuilder,
  ) {}


  signInForm = this.fb.group({
    email_address: [
      '',
      {
        validators: [Validators.email],
        updateOn: 'blur',
      },
    ],
    password: ['', [Validators.required, Validators.minLength(25)]],
  })
  onSignIn() {
    if (this.signInForm.valid) {
      // These should never be null, because we just checked to see that for form is validated
      // but this keeps Typescript from squawking
      this.email_address = this.signInForm.controls.email_address.value ?? ' '
      this.password = this.signInForm.controls.password.value ?? ''
      this.isLoading = true
      const authenticationDetails: AuthenticationDetails = {
        Username: this.email_address,
        Password: this.password,
      }
      if (authenticationDetails.Password != '' && authenticationDetails.Username != ''){
        alert('You have successfully signed in! ')
      }

      alert('Something is wrong, your credentials are invalid and you should not be able to sign in')


    }
    else {
      alert('Something is wrong, your credentials are invalid and you should not be able to sign in')
    }
  }

  onSignInForm(){
    //old function rip this out
  }

}
