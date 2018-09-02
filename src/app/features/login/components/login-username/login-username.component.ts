import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bsa-login-username',
  templateUrl: './login-username.component.html'
})
export class LoginUsernameComponent {
  @Input() loginForm: FormGroup;
}
