import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { LoginResolver } from './resolvers/login.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    resolve: {
      usersAvailable: LoginResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule {}
