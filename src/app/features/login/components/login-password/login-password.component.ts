import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bsa-login-password',
  templateUrl: './login-password.component.html'
})
export class LoginPasswordComponent {
  @Input() loginForm: FormGroup;
}
