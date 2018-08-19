import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';

const modules = [
  SharedModule,
  ErrorRoutingModule
];

const components = [
  ErrorComponent
];

@NgModule({
  imports: modules,
  declarations: components
})
export class ErrorModule {}
