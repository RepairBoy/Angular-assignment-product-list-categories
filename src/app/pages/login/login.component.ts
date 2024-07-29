import { NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
  loginForm!:FormGroup

  ngOnInit(){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20),this.hasNumberValidator, this.hasSpecialCharactersValidator, this.noWhitespaceValidator])
    })
  }

  handleSubmit(){
    // this.router.navigate(['/']);
    console.log("done")
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
  hasNumberValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber? null : { hasNumber: true };
  }
  hasSpecialCharactersValidator(control: AbstractControl): ValidationErrors | null {
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
    return hasSpecialChars ? null : { hasSpecialChars: true };
  }
  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const hasWhitespace = /\s/.test(control.value);
    return hasWhitespace? { hasWhitespace: true } : null;
  }
}
