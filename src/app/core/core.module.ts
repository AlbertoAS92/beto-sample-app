import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const modules = [
  RouterModule
];

const components = [

];

const exported = [
  ...components
];

const providers = [

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
