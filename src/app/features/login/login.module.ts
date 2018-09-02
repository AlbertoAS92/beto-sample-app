import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './containers/login-page.component';
import { LoginUsernameComponent } from './components/login-username/login-username.component';
import { LoginPasswordComponent } from './components/login-password/login-password.component';
import { LoginResolver } from './resolvers/login.resolver';
import { RouterModule } from '@angular/router';
import { LoginUsersAvailableComponent } from './components/login-users-available/login-users-available.component';

const modules = [
  SharedModule,
  LoginRoutingModule,
  ReactiveFormsModule,
  RouterModule
];

const components = [
  LoginPageComponent,
  LoginUsernameComponent,
  LoginPasswordComponent,
  LoginUsersAvailableComponent
];

const providers = [
  LoginResolver
];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class LoginModule {}
