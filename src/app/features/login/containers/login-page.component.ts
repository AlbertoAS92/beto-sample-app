import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

enum LoginFormControl {
  userName = 'userName',
  password = 'password'
}

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.log(this.f[LoginFormControl.userName].value);
    console.log(this.f[LoginFormControl.password].value);
  }
}
