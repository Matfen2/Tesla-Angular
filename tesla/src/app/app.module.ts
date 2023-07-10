import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCarsComponent } from './components/show-cars/show-cars.component';
import { AboutCarsComponent } from './components/about-cars/about-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCarsComponent,
    AboutCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
