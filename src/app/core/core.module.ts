import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { UserService } from './services/user/user.service';
import { SharedModule } from '../shared/shared.module';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

const modules = [
  RouterModule,
  HttpClientModule,
  SharedModule
];

const components = [

];

const exported = [
  ...components
];

const providers = [
  AuthService,
  UserService,
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }
}
