import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem3Component } from './problem3.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";

const validPassword = 'MyPassword'
const veryValidPassword = 'MyPasswordMyPasswordMyPassword'
const validEmail = 'test@test.com'
describe('Problem3Component', () => {
  let component: Problem3Component;
  let fixture: ComponentFixture<Problem3Component>;
  let debugElement: DebugElement

  beforeEach(() => {
   TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers:[
        { provide: FormBuilder }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })

    fixture = TestBed.createComponent(Problem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have proper initial values, sign in button disabled', () => {
    const signInForm = component.signInForm
    const signInFormValues = {
      email_address: '',
      password: '',
    }
    expect(signInForm.value).toEqual(signInFormValues)
    const submitBtn: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('button')[0]

    expect(submitBtn.disabled).toBeTruthy()
  })
  it('should enable sign in button if email and password are one set', () => {
    // //Set valid values for the other values in the form
    //
    //Email

    const signInformEmailEl: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('input')[0]
    signInformEmailEl.value = validEmail
    signInformEmailEl.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    signInformEmailEl.dispatchEvent(new Event('blur'))
    fixture.detectChanges()
    //
    // Password
    const signInformPasswordEl: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('input')[1]
    signInformPasswordEl.value = veryValidPassword
    signInformPasswordEl.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    signInformPasswordEl.dispatchEvent(new Event('blur'))
    fixture.detectChanges()
    const submitBtn: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('button')[0]
    expect(submitBtn.disabled).toBeFalse()
  })
  it('should enable sign in button if email and password are another set', () => {
    // //Set valid values for the other values in the form
    //
    //Email

    const signInformEmailEl: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('input')[0]
    signInformEmailEl.value = validEmail
    signInformEmailEl.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    signInformEmailEl.dispatchEvent(new Event('blur'))
    fixture.detectChanges()
    //
    // Password
    const signInformPasswordEl: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('input')[1]
    signInformPasswordEl.value = validPassword
    signInformPasswordEl.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    signInformPasswordEl.dispatchEvent(new Event('blur'))
    fixture.detectChanges()
    const submitBtn: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('button')[0]
    expect(submitBtn.disabled).toBeFalse()
  })

  it('should not enable sign in button if email is not set', () => {
    // //Set valid values for the other values in the form
    //
    //Email not set

    //
    // Password
    const signInformPasswordEl: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('input')[1]
    signInformPasswordEl.value = validPassword
    signInformPasswordEl.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    signInformPasswordEl.dispatchEvent(new Event('blur'))
    fixture.detectChanges()
    const submitBtn: HTMLInputElement = debugElement.nativeElement
      .querySelector('#signInForm')
      .querySelectorAll('button')[0]
    expect(submitBtn.disabled).toBeTrue()
  })

});
