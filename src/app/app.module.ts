import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule.forRoot()
];

@NgModule({
  imports: modules,
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
