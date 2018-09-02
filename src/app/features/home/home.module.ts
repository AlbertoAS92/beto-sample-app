import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page.component';

const modules = [
  SharedModule,
  HomeRoutingModule
];

const components = [
  HomePageComponent
];

@NgModule({
  imports: modules,
  declarations: components
})
export class HomeModule {}
